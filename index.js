import express from "express"
import connectDb from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cookieParser from "cookie-parser"

const app = express()

//middlewares
app.use(express.json()) //json parser
app.use(cookieParser()) //cookies pareser

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