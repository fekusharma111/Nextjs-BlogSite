import express from "express";
import { loginUser, refreshToken, validatePageRefreshLogin, verifyJWTToken } from "../controller/authController.js";
import { createBlog, createCategory, getAllActiveCategories, updateCategoryById } from "../controller/blogController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/refreshToken", refreshToken);
router.get("/validatePageRefreshLogin", verifyJWTToken, validatePageRefreshLogin);

router.post("/createCategory", verifyJWTToken, createCategory);
router.get("/getAllCategories", getAllActiveCategories);
router.post("/updateCategory", verifyJWTToken, updateCategoryById);

router.post("/createBlog", verifyJWTToken, createBlog);

export default router;
