import { verifyJWT } from "../utils/jwt.js"

export const verifyToken = async (req, res, next) => {
    try {
        const { token } = req.cookies
        if (token) {
            //verify the jwt token
            const id = verifyJWT(token)
            //set the id in req object'
            req.id = id
            //call next function to move to next middleware
            next()
        } else {
            res.status(400).send({ error: "Token Not Found" })
        }
    } catch (error) {
        res.status(500).send({ error: "Something Went Wrong", message: error.message })
    }
}