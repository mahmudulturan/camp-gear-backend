import { Types } from "mongoose";


export interface IAddress {
    address: string;
    city: string;
    state: string;
    zip: string;
}

export interface IUser {
    name: string;
    email: string;
    phone: string;
}

export interface IBooking {
    user: IUser;
    deliveryAddress: IAddress;
    product: {
        product: Types.ObjectId;
        quantity: number;
    }[];
    quantity: number;
    total: number;
    status: string;
}