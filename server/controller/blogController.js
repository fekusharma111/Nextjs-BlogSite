import createBlogModel from "../models/blogs/createBlog.js";
import createCategoryModel from "../models/categories/createCategory.js";
import { cryptoEncryption } from "../utils/helper.js";

export const createCategory = async (req, res) => {
  try {
    console.log("Creating category API: ", req.body, req.user);

    const newCategoryData = {
      ...req.body,
      activeStatus: true,
      createdBy: req.user.username,
    };
    const categoryExists = await createCategoryModel.checkIfCategoryExists(req.body.categoryName);
    if (categoryExists) {
      return res.status(400).json({ message: "Category already exists." });
    }
    const newCategory = new createCategoryModel(newCategoryData);
    const savedCategory = await newCategory.save();

    // console.log("Category created successfully:", savedCategory);
    const cryptoEncryptedData = cryptoEncryption(savedCategory);
    res.status(200).json({ encryptedData: cryptoEncryptedData });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(400).json({ message: "Error while creating category", error: error });
  }
};

export const getAllActiveCategories = async (req, res) => {
  try {
    let allCategories = await createCategoryModel.find({ activeStatus: true });
    // console.log("getting all categories", allCategories);
    res.status(200).json(allCategories);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(400).json({ message: "Error while getting category", error: error });
  }
};

export const updateCategoryById = async (req, res) => {
  console.log("updating category api called", req.body);
  const newCategoryData = {
    ...req.body,
    updatedBy: [
      {
        updaterName: req.user.username,
        updatedAt: new Date(),
      },
      // ... any existing update objects
      ...(req.body.updatedBy || []),
    ],
    updatedAt: new Date(),
  };
  const updatedCategory = await createCategoryModel.findByIdAndUpdate(newCategoryData._id, newCategoryData, { new: true });
  if (updatedCategory) {
    const cryptoEncryptedData = cryptoEncryption(updatedCategory);
    res.status(200).json({ encryptedData: cryptoEncryptedData });
  } else {
    res.status(400).json({ message: "Error while updating category", error: error });
  }
};

export const createBlog = async (req, res) => {
  try {
    const newBlogData = {
      ...req.body,
      activeStatus: true,
      createdBy: req.user.username,
    };
    const blogExists = await createBlogModel.checkIfBlogExists(req.body.slug);
    if (blogExists) {
      return res.status(400).json({ message: "blog already exists." });
    }
    const newBlog = new createBlogModel(newBlogData);
    const savedBlog = await newBlog.save();

    // console.log("Category created successfully:", savedCategory);
    const cryptoEncryptedData = cryptoEncryption(savedBlog);
    res.status(200).json({ encryptedData: cryptoEncryptedData });
    console.log("creating blog here", newBlogData);
  } catch (error) {
    res.status(400).json({ message: "Error while creating blog", error: error });
  }
};
