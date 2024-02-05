import mongoose from "mongoose";

const createBlogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    isTrending: {
      type: Boolean,
    },
    activeStatus: {
      type: Boolean,
    },
    createdBy: {
      type: String,
      required: true,
    },
    updatedBy: [
      {
        updaterName: {
          type: String,
          required: true,
        },
        updatedAt: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
    statics: {
      checkIfBlogExists: async function (blogslug) {
        try {
          console.log("inside checking blog", blogslug);
          const existingBlog = await this.findOne({ slug: blogslug });
          return !!existingBlog; // Return true if category exists, false otherwise
        } catch (error) {
          throw error;
        }
      },
    },
  }
);

const createBlogModel = mongoose.model("Allblogs", createBlogSchema);
export default createBlogModel;
