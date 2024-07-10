import mongoose from "mongoose";
import { IAddress, IBooking, IUser } from "./bookings.interfaces";

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, { _id: false })

const adddressSchema = new mongoose.Schema<IAddress>({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    }
})

const bookingSchema = new mongoose.Schema<IBooking>({
    user: {
        type: userSchema,
        required: true
    },
    deliveryAddress: {
        type: adddressSchema,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
        default: "pending"
    }
}, { timestamps: true })


const Booking = mongoose.model<IBooking>("Booking", bookingSchema);

export default Booking;