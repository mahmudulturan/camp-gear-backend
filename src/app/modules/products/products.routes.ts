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
     * @param {IRating} requestBody.rating - Rating details of the product. Example: { rate: 4.5, count: 120 }
     * @param {IInventory} requestBody.inventory.required - Inventory details of the product. Example: { inStock: true, quantity: 10 }
     * @produces application/json
     * @returns {object} 201 - An object containing the newly created product information and a success message.
     * @returns {object} 400 - An object containing an error message if the request body is invalid.
     * @returns {object} 401 - An object containing an error message if authentication fails.
     */
    .post('/', ProductsControllers.createProduct);


router
    /**
     * @route GET /products
     * @group Products - Operations about managing products
     * @produces application/json
     * @returns {Array.<IProduct>} 200 - An array of product objects as per the defined schema.
     * @returns {object} 404 - An object containing an error message if no products are available.
     * @returns {object} 401 - An object containing an error message if authentication fails.
     */
    .get('/', ProductsControllers.getAllProducts);


router
    /**
     * @route GET /products/categories
     * @group Products - Operations about managing products
     *  @produces application/json
     * @returns {Array.<string>} 200 - An array of product categories as per the defined schema.
     * @returns {object} 401 - An object containing an error message if authentication fails.
     * @returns {object} 404 - An object containing an error message if no products are available.
     */
    .get('/categories', ProductsControllers.getCategories);

router
    /**
     * @route GET /products/:id
     * @group Products - Operations about managing products
     * @param {string} id.path.required - The ID of the product to retrieve.
     * @produces application/json
     * @returns {object} 200 - An object containing the requested product information as per the defined schema.
     * @returns {object} 404 - An object containing an error message if the product is not found.
     * @returns {object} 401 - An object containing an error message if authentication fails.
     */
    .get('/:id', ProductsControllers.getSingleProduct);



router
    /**
     * @route PUT /products/:id
     * @group Products - Operations about managing products
     * @param {string} id.path.required - The ID of the product to update.
     * @param {Object} requestBody - Request body required for updating a product
     * @param {string} [requestBody.title] - The updated title of the product. Optional.
     * @param {string} [requestBody.description] - The updated description of the product. Optional.
     * @param {IPrice} [requestBody.price] - The updated price of the product. Example: { amount: 160 }. Optional.
     * @param {string} [requestBody.category] - The updated category of the product. Optional.
     * @param {Array.<string>} [requestBody.image] - Updated URLs of images representing the product. Optional.
     * @param {IRating} [requestBody.rating] - Updated rating details of the product. Example: { rate: 4.7, count: 130 }. Optional.
     * @param {IInventory} [requestBody.inventory] - Updated inventory details of the product. Example: { inStock: false, quantity: 5 }. Optional.
     * @produces application/json
     * @returns {object} 200 - An object containing the updated product information and a success message.
     * @returns {object} 400 - An object containing an error message if the request body is invalid.
     * @returns {object} 404 - An object containing an error message if the product is not found.
     * @returns {object} 401 - An object containing an error message if authentication fails.
     */
    .put('/:id', ProductsControllers.updateSingleProduct);


router
    /**
     * @route DELETE /products/:id
     * @group Products - Operations about managing products
     * @param {string} id.path.required - The ID of the product to delete.
     * @produces application/json
     * @returns {object} 204 - No content response indicating successful deletion.
     * @returns {object} 404 - An object containing an error message if the product is not found.
     * @returns {object} 401 - An object containing an error message if authentication fails.
     */
    .delete('/:id', ProductsControllers.deleteSingleProduct);



export default router;