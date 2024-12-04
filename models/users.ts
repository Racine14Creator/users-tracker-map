import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  sex: { type: String, required: true },
  salary: { type: Number, required: true },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
