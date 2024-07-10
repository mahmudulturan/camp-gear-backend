import { Request, Response } from "express";
import { ProductsService } from "./products.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

// controller for creating product
const createProduct = catchAsync(async (req: Request, res: Response) => {
    const product = await ProductsService.createProductIntoDB(req.body);
    sendResponse(res, { success: true, status: 201, message: "Product created successfully", data: product });
});

// controller for getting all products
const getAllProducts = catchAsync(async (req: Request, res: Response) => {
    const products = await ProductsService.getAllProductsFromDB();
    sendResponse(res, { success: true, status: 200, message: "All products fetched successfully", data: products });
});


// controller for getting a single product
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
    const product = await ProductsService.getAProductFromDB(req.params.id);
    sendResponse(res, { success: true, status: 200, message: "Product fetched successfully", data: product });
});


// controller for updating a single product
const updateSingleProduct = catchAsync(async (req: Request, res: Response) => {
    const product = await ProductsService.updateProductInDB(req.params.id, req.body);
    sendResponse(res, { success: true, status: 200, message: "Product updated successfully", data: product });
});


// controller for deleting a single product 
const deleteSingleProduct = catchAsync(async (req: Request, res: Response) => {
    const product = await ProductsService.deleteProductFromDB(req.params.id);
    sendResponse(res, { success: true, status: 200, message: "Product deleted successfully", data: product });
});



export const ProductsController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct
}