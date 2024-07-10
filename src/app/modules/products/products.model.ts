import mongoose from "mongoose";
import { IInventory, IPrice, IProduct, IRating } from "./products.interface";

// price schema
const priceSchema = new mongoose.Schema<IPrice>({
    amount: { type: Number, required: true },
}, { _id: false })

// rating schema
const ratingSchema = new mongoose.Schema<IRating>({
    rate: { type: Number, required: true },
    count: { type: Number, required: true },
}, { _id: false })

// inventory schema
const inventorySchema = new mongoose.Schema<IInventory>({
    inStock: { type: Boolean, required: true },
    quantity: { type: Number, required: true },
}, { _id: false })

// product schema
const productSchema = new mongoose.Schema<IProduct>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: priceSchema, required: true },
    category: { type: String, required: true },
    image: { type: [String], required: true },
    rating: { type: ratingSchema, required: true },
    inventory: { type: inventorySchema, required: true },
})

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product