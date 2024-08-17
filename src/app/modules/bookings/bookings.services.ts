import Product from "../products/products.model";
import { IBooking } from "./bookings.interfaces";
import Booking from "./bookings.models";

// service for create boooking
const createBookingIntoDB = async (booking: IBooking) => {
    await Promise.all(booking.product.map(async (productInfo) => {

        const product = await Product.findById(productInfo.product);
        if (!product) throw new Error("Product not found");

        product.inventory.quantity -= productInfo.quantity;
        await product.save();

        return product;
    }));
    
    const newBooking = await Booking.create(booking);
    return newBooking;
};

// service for get all bookings
const getAllBookingsFromDB = async () => {
    const bookings = await Booking.find().populate("product");
    return bookings;
}

// service for get a single booking
const getABookingFromDB = async (bookingId: string) => {
    const booking = await Booking.findById(bookingId).populate("populate");
    return booking;
}

// service for update booking
const updateBookingInDB = async (bookingId: string, booking: IBooking) => {
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, booking, { new: true });
    return updatedBooking;
}

// service for delete booking
const deleteBookingInDB = async (bookingId: string) => {
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);
    return deletedBooking;
}


export const BookingsServices = {
    createBookingIntoDB,
    getAllBookingsFromDB,
    getABookingFromDB,
    updateBookingInDB,
    deleteBookingInDB
}