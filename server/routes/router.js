import express from "express";
import { loginUser, refreshToken, validatePageRefreshLogin, verifyJWTToken } from "../controller/authController.js";
import { getAllBLogs, createBlog, updateBlogById, createCategory, getAllActiveCategories, updateCategoryById } from "../controller/blogController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/refreshToken", refreshToken);
router.get("/validatePageRefreshLogin", verifyJWTToken, validatePageRefreshLogin);

router.post("/createCategory", verifyJWTToken, createCategory);
router.get("/getAllCategories", getAllActiveCategories);
router.post("/updateCategory", verifyJWTToken, updateCategoryById);

router.post("/createBlog", verifyJWTToken, createBlog);
router.get("/getAllBLogs", getAllBLogs);
router.post("/updateBlog", verifyJWTToken, updateBlogById);

export default router;
