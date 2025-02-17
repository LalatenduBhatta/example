import Product from "../model/productModel.js"

export const getAllProducts = async (req, res) => {
    try {
        const data = await Product.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}


export const addProduct = async (req, res) => {
    try {
        const productData = new Product(req.body)
        await productData.save()
        res.status(201).send({ message: "product saved in db" })
    } catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}

