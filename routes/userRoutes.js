import express from "express"
import { getAllUsers, createUser, updateUser, userLogin, userLogout } from "../controller/userController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const userRoutes = express.Router()

//!user APIs

// get all users data
userRoutes.get("/allusers", getAllUsers) //! http://localhost:1000/user/allusers

// create/add user //registration //signup
userRoutes.post("/create", createUser) //! http://localhost:1000/user/create

//update user details
userRoutes.put("/update", verifyToken, updateUser) //! http://localhost:1000/user/update

//user login
userRoutes.post("/login", userLogin)   //! http://localhost:1000/user/login

//user Logout
userRoutes.get("/logout", userLogout)  //!http://localhost:1000/user/logout

export default userRoutes;