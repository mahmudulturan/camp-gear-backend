import { FilterQuery } from "mongoose";
import { IProduct } from "./products.interfaces";
import Product from "./products.model";

const createProductIntoDB = async (product: IProduct) => {
    const newProduct = Product.create(product);
    return newProduct;
}

const getAllProductsFromDB = async (queryKey: Record<string, any>): Promise<{ products: IProduct[], productsCount: number }> => {
    let query: FilterQuery<any> = {};
    let search;
    let limit = 9;
    let page = 1;
    let sort: Record<string, any> = { createdAt: "desc" };

    if (queryKey.filter) {
        query.category = queryKey.filter;
    }

    if (queryKey.sort) {
        const sortKey = queryKey.sort;
        if (sortKey === 'price') {
            sort['price.amount'] = queryKey.order === 'asc' ? 1 : -1;
        } else {
            sort[sortKey] = queryKey.order;
        }
    }

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

    const products = await Product.find(query).limit(limit).skip(skipValue).sort(sort);
    const productsCount = await Product.countDocuments(query);
    return { products, productsCount };
}

const getCategoriesFromDB = async () => {
    const categories = await Product.distinct('category');
    return categories;
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
    deleteProductFromDB,
    getCategoriesFromDB
};