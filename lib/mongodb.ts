import mongoose from "mongoose";

const conn = async () => {
  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Connected to mongodb...", db.connection.host);
  } catch (error) {
    console.log(error);
  }
};

export default conn;
