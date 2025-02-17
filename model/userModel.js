import mongoose from "mongoose";
import userSchema from "../schema/userSchema.js";

const User = mongoose.model("users", userSchema)

export default User;