import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

export const JWT_ACCESS_KEY = "JWTAccessSecretKey";
export const JWT_REFRESH_KEY = "JWTRefreshSecretKey";
export const CRYPTO_ENCRYPTION_KEY = "CryptoEncryptionKey";

const ENCRYPTION_ALGORITHM = CryptoJS.AES;

export const cryptoEncryption = (rawData) => {
  try {
    const encryptedData = ENCRYPTION_ALGORITHM.encrypt(JSON.stringify(rawData), CRYPTO_ENCRYPTION_KEY).toString();
    return encryptedData;
  } catch (error) {
    console.error("Encryption failed:", error);
    throw new Error("Encryption failed");
  }
};

export const cryptoDecryption = (encryptedData) => {
  try {
    const decryptedBytes = ENCRYPTION_ALGORITHM.decrypt(encryptedData.secureData, CRYPTO_ENCRYPTION_KEY);
    const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
    console.log("Decrypted data:", decryptedData);
    return decryptedData;
  } catch (error) {
    console.error("Decryption failed:", error);
    throw new Error("Decryption failed");
  }
};

export const generateAccessToken = (rawData) => {
  try {
    const accessToken = jwt.sign({ secureData: rawData }, JWT_ACCESS_KEY, {
      expiresIn: "15s",
    });
    return accessToken;
  } catch (error) {
    console.error("Access token generation failed:", error);
    throw new Error("Access token generation failed");
  }
};

export const generateRefreshToken = (rawData) => {
  try {
    const refreshToken = jwt.sign({ secureData: rawData }, JWT_REFRESH_KEY);
    return refreshToken;
  } catch (error) {
    console.error("Refresh token generation failed:", error);
    throw new Error("Refresh token generation failed");
  }
};
