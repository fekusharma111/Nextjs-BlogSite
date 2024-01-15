import User from "../models/UserSchema.js";
import jwt from "jsonwebtoken";

import RefreshTokenSchema from "../models/RefreshToken.js";
import logger from "../utils/logger.js";
import {
  JWT_ACCESS_KEY,
  JWT_REFRESH_KEY,
  CRYPTO_ENCRYPTION_KEY,
  cryptoEncryption,
  cryptoDecryption,
  generateAccessToken,
  generateRefreshToken,
} from "../utils/helper.js";

export const refreshToken = async (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) {
    return res.status(401).json("You are not authenticated!");
  }
  // console.log("getting refresh token id", refreshToken);
  RefreshTokenSchema.find({ token: refreshToken })
    .exec()
    .then((documents) => {
      if (documents.length > 0) {
        // console.log("Found documents:", documents);
        jwt.verify(refreshToken, JWT_REFRESH_KEY, async (err, result) => {
          err && console.log(err);
          await RefreshTokenSchema.deleteMany({ token: refreshToken })
            .exec()
            .then(() => {
              // console.log("deleted refresh token successfully");
            })
            .catch((err) => {
              console.log("error deleting refresh token", err);
            });
          // console.log("result here", result);
          let decryptedData = cryptoDecryption(result);
          // console.log("decrypted data", decryptedData);
          let encryptedData = cryptoEncryption(decryptedData);
          const newAccessToken = generateAccessToken(encryptedData);
          const newRefreshToken = generateRefreshToken(encryptedData);

          // console.log(JSON.parse(CryptoJS.AES.decrypt(result.secureData, CRYPTO_ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8)));
          let newToken = new RefreshTokenSchema({
            userId: decryptedData._id,
            token: newRefreshToken,
          });
          await newToken.save();
          // console.log("here now");
          setTokenCookies(res, newAccessToken, "accessToken");
          setTokenCookies(res, newRefreshToken, "refreshToken");
          res.status(200).json({ message: "success" });
        });
      } else {
        return res.status(403).json("Refresh token is not valid!");
      }
    })
    .catch((err) => {
      console.error("Error:", err);
    });
  // let id = JSON.parse(CryptoJS.AES.decrypt(refreshToken, "CRYPTO_ENCRYPTION_KEY").toString());

  // RefreshTokenSchema.findById()
};
export const verifyJWTToken = async (req, res, next) => {
  // console.log("Verify token is not valid!", req.headers.authorization);
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_ACCESS_KEY, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }
      let decryptedData = cryptoDecryption(user);
      req.user = decryptedData;
      console.log("Verified", req.user);
      next();
    });
  } else {
    res.status(401).json("You are not authenticated!");
  }
};
export const validatePageRefreshLogin = async (req, res) => {
  let decryptedData = req.user;
  // console.log("after verified", decryptedData);
  // let dbUser = await User.findById(decryptedData._id).exec();
  User.findByIdAndUpdate(decryptedData._id, { lastloginUpdateTime: new Date().getTime() }, { new: true })
    .exec()
    .then((document) => {
      // console.log("lastloginupdatetime is updated of user", document);
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.log("error updating lastloginupdateTime", err);
      res.status(404).json({ message: `error updating lastloginupdateTime, ${err}` });
    });
};
export const loginUser = async (req, res) => {
  const { userName, password } = req.body;
  const user = await User.findOneAndUpdate({ username: userName }, { lastloginTime: new Date().getTime() }, { new: true });
  if (!user) {
    return res.status(400).json({ message: "User Doesn't Exist" });
  }
  try {
    if (password === user.password) {
      const { password, ...others } = user._doc;
      const cryptoEncryptedData = cryptoEncryption(others);
      const accessToken = generateAccessToken(cryptoEncryptedData);
      const refreshToken = generateRefreshToken(cryptoEncryptedData);
      const newToken = new RefreshTokenSchema({ userId: user._id, token: refreshToken });
      await newToken.save();
      logger.info(`User ${user._doc.userName} logged in successfully.`);

      setTokenCookies(res, accessToken, "accessToken");
      setTokenCookies(res, refreshToken, "refreshToken");
      res.status(200).json({ encryptedData: cryptoEncryptedData });
    } else {
      res.status(400).json({ message: "Incorrect Password" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error while login in user", error: error });
  }
};
const setTokenCookies = (res, token, cookiesName) => {
  // Set the access token cookie
  res.cookie(cookiesName, token, {
    // httpOnly: true,
    secure: true, // Only send the cookie over HTTPS
    // sameSite: "None",
  });
};
