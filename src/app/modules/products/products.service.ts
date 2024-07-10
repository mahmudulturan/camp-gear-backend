import { IProduct } from "./products.interface";
import Product from "./products.model";

const createProductIntoDB = async (product: IProduct) => {
    const newProduct = Product.create(product);
    return newProduct;
}