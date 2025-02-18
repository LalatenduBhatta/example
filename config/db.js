import mongoose from "mongoose"
import { config } from "dotenv"
config()

const dbURL = process.env.DB_URL || "mongodb://127.0.0.1:27017/myDb2"

//connection function
const connectDb = async () => {
    try {
        await mongoose.connect(dbURL)
        console.log("db connected successfully")
    } catch (error) {
        console.log("Error in db connection", error)
    }
}

export default connectDb;