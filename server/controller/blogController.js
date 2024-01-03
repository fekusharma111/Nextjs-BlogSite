import createCategoryModel from "../models/categories/createCategory.js";
import { cryptoEncryption } from "../utils/helper.js";

export const createCategory = async (req, res) => {
  try {
    console.log("Creating category API: ", req.body, req.user);

    const newCategoryData = {
      ...req.body,
      createdBy: req.user.username,
    };
    const categoryExists = await createCategoryModel.checkIfCategoryExists(req.body.categoryName);
    if (categoryExists) {
      return res.status(400).json({ message: "Category already exists." });
    }
    const newCategory = new createCategoryModel(newCategoryData);
    const savedCategory = await newCategory.save();

    console.log("Category created successfully:", savedCategory);
    const cryptoEncryptedData = cryptoEncryption(savedCategory);
    res.status(200).json({ encryptedData: cryptoEncryptedData });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(400).json({ message: "Error while creating category", error: error });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    let allCategories = await createCategoryModel.find({});
    console.log("getting all categories", allCategories);
    res.status(200).json(allCategories);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(400).json({ message: "Error while getting category", error: error });
  }
};
