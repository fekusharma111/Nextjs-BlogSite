import express from "express";
import { loginUser, refreshToken, validatePageRefreshLogin, verifyJWTToken } from "../controller/authController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/refreshToken", refreshToken);
router.get("/validatePageRefreshLogin", verifyJWTToken, validatePageRefreshLogin);

export default router;
