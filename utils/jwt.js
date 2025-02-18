import jwt from "jsonwebtoken"
import { config } from "dotenv"
config()

const secretKey = process.env.MY_SECRET || "yourKey"

//generate token function

export const generateToken = (data, exprireTime) => {
    return jwt.sign(data, secretKey, { expiresIn: exprireTime })
}


//verify JWT Token

export const verifyJWT = (token) => {
    try {
        const { id } = jwt.verify(token, secretKey)
        return id;
    } catch (error) {
        throw new Error(error.message)
    }
}
