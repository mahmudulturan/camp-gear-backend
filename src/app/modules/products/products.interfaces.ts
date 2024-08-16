
export interface IPrice {
    amount: number;
    discount: number;
};

export interface IRating {
    rate: number;
    count: number;
}
export interface IInventory {
    quantity: number;
    inStock: boolean;
};

export interface IProduct {
    title: string;
    description: string;
    price: IPrice;
    category: string;
    image: string;
    rating: IRating;
    inventory: IInventory;
}

