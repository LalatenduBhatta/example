import { config } from "dotenv"
import express from "express"
import connectDb from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

//dotenv config
config()
// console.log(process.env.MY_VAR) //accessing the env variable

//middlewares
app.use(express.json()) //json parser
app.use(cookieParser()) //cookies pareser
app.use(cors({ origin: "http://localhost:5173" })) //allows other origin requests

//APIs
app.get("/", (req, res) => res.send("Server At Work"))

//routes
app.use("/user", userRoutes) //user routes
app.use("/product", productRoutes)//product routes


//database connection
connectDb()

//listen
app.listen(1000, () => {
    console.log("server running in http://localhost:1000");
})