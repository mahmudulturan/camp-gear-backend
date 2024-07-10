import { Router } from "express";
import { ProductsControllers } from "./products.controllers";

const router = Router();

router
    /**
     * @route POST /products
     * @group Products - Operations about managing products
     * @param {Object} requestBody - Request body required for creating a new product
     * @param {string} requestBody.title.required - The title of the product. Example: "Tent"
     * @param {string} requestBody.description.required - A description of the product. Example: "A durable tent suitable for camping."
     * @param {IPrice} requestBody.price.required - The price of the product. Example: { amount: 150 }
     * @param {string} requestBody.category.required - The category of the product. Example: "Camping Tents"
     * @param {Array.<string>} requestBody.image.required - URLs of images representing the product. Example: ["http://example.com/image1.jpg", "http://example.com/image2.jpg"]
     * @param {IRating} requestBody.rating.required - Rating details of the product. Example: { rate: 4.5, count: 120 }
     * @param {IInventory} requestBody.inventory.required - Inventory details of the product. Example: { inStock: true, quantity: 10 }
     * @produces application/json
     * @returns {object} 201 - An object containing the newly created product information and a success message.
     * @returns {object} 400 - An object containing an error message if the request body is invalid.
     * @returns {object} 401 - An object containing an error message if authentication fails.
     */
    .post('/', ProductsControllers.createProduct);

export default router;