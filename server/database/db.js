import mongoose from "mongoose";

const connection = async (MONGO_URI) => {
  try {
    await mongoose.connect("mongodb+srv://BlogSiteDB:SLfj17waDuooaMni@cluster0.zl8b9ap.mongodb.net/MyBlog?retryWrites=true&w=majority");
  } catch (error) {
    console.log(`Error while connecting to Database ${error}`);
  }
};
export default connection;
