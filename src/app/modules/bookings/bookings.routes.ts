import { Router } from "express";
import { BookingsControllers } from "./bookings.controllers";

const router = Router();

router
    /**
     * @route POST /bookings
     * @group Bookings - Operations about managing bookings
     * @description Creates a new booking.
     * @produces application/json
     * @returns {object} 201 - An object containing the newly created booking information and a success message.
     * @returns {object} 400 - An object containing an error message if the request body is invalid.
     * @returns {object} 401 - An object containing an error message if authentication fails.
     */
    .post('/', BookingsControllers.createBooking);

router
    /**
     * @route GET /bookings
     * @group Bookings - Operations about managing bookings
     * @description Retrieves all bookings.
     * @produces application/json
     * @returns {Array.<IBooking>} 200 - An array of booking objects as per the defined schema.
     * @returns {object} 404 - An object containing an error message if no bookings are available.
     * @returns {object} 401 - An object containing an error message if authentication fails.
     */
    .get('/', BookingsControllers.getAllBookings);

router
    /**
     * @route GET /bookings/:id
     * @group Bookings - Operations about managing bookings
     * @param {string} id.path.required - The ID of the booking to retrieve.
     * @produces application/json
     * @returns {object} 200 - An object containing the requested booking information as per the defined schema.
     * @returns {object} 404 - An object containing an error message if the booking is not found.
     * @returns {object} 401 - An object containing an error message if authentication fails.
     */
    .get('/:id', BookingsControllers.getSingleBooking);

router
    /**
     * @route PUT /bookings/:id
     * @group Bookings - Operations about managing bookings
     * @param {string} id.path.required - The ID of the booking to update.
     * @produces application/json
     * @returns {object} 200 - An object containing the updated booking information and a success message.
     * @returns {object} 400 - An object containing an error message if the request body is invalid.
     * @returns {object} 404 - An object containing an error message if the booking is not found.
     * @returns {object} 401 - An object containing an error message if authentication fails.
     */
    .put('/:id', BookingsControllers.updateBooking);

router
    /**
     * @route DELETE /bookings/:id
     * @group Bookings - Operations about managing bookings
     * @param {string} id.path.required - The ID of the booking to delete.
     * @produces application/json
     * @returns {object} 204 - No content response indicating successful deletion.
     * @returns {object} 404 - An object containing an error message if the booking is not found.
     * @returns {object} 401 - An object containing an error message if authentication fails.
     */
    .delete('/:id', BookingsControllers.deleteBooking);

    
export default router;