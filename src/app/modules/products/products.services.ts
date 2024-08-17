import { FilterQuery } from "mongoose";
import { IProduct } from "./products.interfaces";
import Product from "./products.model";

const createProductIntoDB = async (product: IProduct) => {
    const newProduct = Product.create(product);
    return newProduct;
}

const getAllProductsFromDB = async (queryKey: Record<string, any>) => {
    let query: FilterQuery<any> = {};
    let search;
    let limit = 9;
    let page = 1

    if (queryKey.searchKey) {
        search = queryKey.searchKey;
    }

    if (queryKey.limit) {
        limit = queryKey.limit;
    }
    if (queryKey.page) {
        page = queryKey.page;
    }

    if (queryKey.category) {
        query.category = queryKey.category;
    }

    if (search) {
        query.$or = [
            { title: { $regex: search, $options: 'i' } },
            { 'description': { $regex: search, $options: 'i' } }
        ];
    }

    const skipValue = (page - 1) * limit;

    const products = await Product.find(query).limit(limit).skip(skipValue).sort({ createdAt: -1 });
    const productsCount = await Product.countDocuments(query);
    return { products, productsCount };
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

export const ProductsServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getAProductFromDB,
    updateProductInDB,
    deleteProductFromDB
};