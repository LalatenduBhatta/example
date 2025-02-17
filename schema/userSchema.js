import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, minLength: 4 },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number },
    password: { type: String, minLength: 6, required: true },
    gender: { type: String, enum: ["male", "female"] },
    age: { type: Number },
    address: {
        city: String,
        zip: Number,
        state: String
    }
})

export default userSchema;