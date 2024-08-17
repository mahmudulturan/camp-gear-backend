import { Request, Response } from "express";
import { ProductsServices } from "./products.services";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

// controller for creating product
const createProduct = catchAsync(async (req: Request, res: Response) => {
    const product = await ProductsServices.createProductIntoDB(req.body);
    sendResponse(res, { success: true, status: 201, message: "Product created successfully", data: product });
});

// controller for getting all products
const getAllProducts = catchAsync(async (req: Request, res: Response) => {
    const products = await ProductsServices.getAllProductsFromDB(req.query);
    sendResponse(res, { success: true, status: 200, message: "All products fetched successfully", data: products });
});

// controller for getting all product categories
const getCategories = catchAsync(async (req: Request, res: Response) => {
    const categories = await ProductsServices.getCategoriesFromDB();
    sendResponse(res, { success: true, status: 200, message: "All product categories fetched successfully", data: categories });
});

// controller for getting a single product
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
    const product = await ProductsServices.getAProductFromDB(req.params.id);
    sendResponse(res, { success: true, status: 200, message: "Product fetched successfully", data: product });
});


// controller for updating a single product
const updateSingleProduct = catchAsync(async (req: Request, res: Response) => {
    const product = await ProductsServices.updateProductInDB(req.params.id, req.body);
    sendResponse(res, { success: true, status: 200, message: "Product updated successfully", data: product });
});


// controller for deleting a single product 
const deleteSingleProduct = catchAsync(async (req: Request, res: Response) => {
    const product = await ProductsServices.deleteProductFromDB(req.params.id);
    sendResponse(res, { success: true, status: 200, message: "Product deleted successfully", data: product });
});



export const ProductsControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
    getCategories
}