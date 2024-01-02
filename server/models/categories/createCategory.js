import mongoose from "mongoose";

const createCategorySchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    categoryDesc: {
      type: String,
    },
    isTrending: {
      type: Boolean,
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    statics: {
      checkIfCategoryExists: async function (categoryName) {
        try {
          console.log("inside checking category", categoryName);
          const existingCategory = await this.findOne({ categoryName: categoryName });
          return !!existingCategory; // Return true if category exists, false otherwise
        } catch (error) {
          throw error;
        }
      },
    },
  }
);

const createCategoryModel = mongoose.model("categoryDetails", createCategorySchema);
export default createCategoryModel;
