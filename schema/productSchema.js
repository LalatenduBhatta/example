import { Schema } from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String },
    price: { type: Number },
    stocks: { type: Number },
    discount: { type: Number }
}, { timestamps: true })

export default productSchema