import { Request, Response } from "express";
import { ProductsService } from "./products.service";
import sendResponse from "../../utils/sendResponse";

const createProduct = async (req: Request, res: Response) => {
    const product = await ProductsService.createProductIntoDB(req.body);
    sendResponse(res, { success: true, status: 201, message: "Product created successfully", data: product });
}

export const ProductsController = {
    createProduct
}