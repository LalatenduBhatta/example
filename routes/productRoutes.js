import { Router } from "express";
import { addProduct, getAllProducts } from "../controller/productController.js";


const productRoutes = Router()

//! product APIs

//get all products
productRoutes.get("/all", getAllProducts) //! http://localhost:1000/product/all

//add product
productRoutes.post("/add", addProduct)  //! http://localhost:1000/product/add

export default productRoutes;