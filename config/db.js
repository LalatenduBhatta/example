import mongoose from "mongoose"

const dbURL = "mongodb+srv://lalatendubhatta:Np9GdyZQbuLXoiPV@mycluster.vd98y.mongodb.net/mydb?retryWrites=true&w=majority&appName=mycluster"


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