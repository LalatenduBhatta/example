import User from "../model/userModel.js"
import { generateToken } from "../utils/jwt.js"
import { createHasedPassword, comparePassword } from "../utils/bcrypt.js"


export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
        res.status(200).send(allUsers)
    } catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}

export const createUser = async (req, res) => { //register
    try {
        let data = req.body
        const hasedPass = await createHasedPassword(data.password)
        const userData = new User({ ...data, password: hasedPass })
        await userData.save()
        res.status(201).send({ message: "User Added Successfully" })
    } catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req //id comming from prev middleware
        let isUser = await User.findById(id) //finding the document fy using id
        if (isUser) {
            await User.updateOne({ email: isUser.email }, { $set: { ...req.body } })
            res.status(200).send({ message: "User Details Updated" })
        } else {
            res.status(400).send({ error: "Invalid Details", message: "User Not Registered" })
        }
    } catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const isUser = await User.findOne({ email })
            if (isUser) {
                //bcrypt to compare passwords
                const isMatched = await comparePassword(password, isUser.password)
                if (isMatched) {
                    //success result (tokenization)
                    let token = generateToken({ id: isUser._id }, 60 * 60 * 24)
                    res.cookie("token", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 })
                    res.status(200).send({ message: "User Login Successful" })
                } else {
                    res.status(400).send({ error: "Password is not matching" })
                }
            } else {
                res.status(400).send({ error: "User Not Found" })
            }
        } else {
            res.status(400).send({ error: "Provide all required fields" })
        }
    } catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}

export const userLogout = async (req, res) => {
    try {
        res.clearCookie("token")
        res.status(200).send({ message: "Logout successful" })
    } catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}