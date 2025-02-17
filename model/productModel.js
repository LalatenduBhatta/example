import { model } from "mongoose";
import productSchema from "../schema/productSchema.js";


const Product = model("products", productSchema)

export default Product