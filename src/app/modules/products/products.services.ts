import { IProduct } from "./products.interfaces";
import Product from "./products.model";

const createProductIntoDB = async (product: IProduct) => {
    const newProduct = Product.create(product);
    return newProduct;
}

const getAllProductsFromDB = async () => {
    const products = await Product.find();
    return products;
}

const getAProductFromDB = async (productId: string) => {
    const product = await Product.findById(productId);
    return product;
}

const updateProductInDB = async (productId: string, product: IProduct) => {
    const updatedProduct = await Product.findByIdAndUpdate(productId, product, { new: true });
    return updatedProduct;
}

const deleteProductFromDB = async (productId: string) => {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
}

export const ProductsService = {
    createProductIntoDB,
    getAllProductsFromDB,
    getAProductFromDB,
    updateProductInDB,
    deleteProductFromDB
};