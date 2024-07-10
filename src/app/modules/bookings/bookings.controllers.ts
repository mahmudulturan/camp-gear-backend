import { Request, Response } from "express";
import { BookingsServices } from "./bookings.services";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";


// controllers for bookings
const createBooking = catchAsync(async (req: Request, res: Response) => {
    const booking = await BookingsServices.createBookingIntoDB(req.body);
    sendResponse(res, { success: true, status: 201, message: "Booking created successfully", data: booking });
})

// controller for getting all bookings
const getAllBookings = catchAsync(async (req: Request, res: Response) => {
    const bookings = await BookingsServices.getAllBookingsFromDB();
    sendResponse(res, { success: true, status: 200, message: "All bookings fetched successfully", data: bookings });
})

// controller for getting a single booking
const getSingleBooking = catchAsync(async (req: Request, res: Response) => {
    const booking = await BookingsServices.getABookingFromDB(req.params.id);
    sendResponse(res, { success: true, status: 200, message: "Booking fetched successfully", data: booking });
})

// controller for updating a single booking
const updateBooking = catchAsync(async (req: Request, res: Response) => {
    const booking = await BookingsServices.updateBookingInDB(req.params.id, req.body);
    sendResponse(res, { success: true, status: 200, message: "Booking updated successfully", data: booking });
})

// contoller for delete a booking
const deleteBooking = catchAsync(async (req: Request, res: Response) => {
    const booking = await BookingsServices.deleteBookingInDB(req.params.id);
    sendResponse(res, { success: true, status: 200, message: "Booking deleted successfully", data: booking });
})



export const BookingsControllers = {
    createBooking,
    getAllBookings,
    getSingleBooking,
    updateBooking,
    deleteBooking
}