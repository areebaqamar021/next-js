export interface LoginInput {
    username: string;
    password: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}
export interface IReview {
    "rating": number,
    "comment": string,
    "date": string,
    "reviewerName": string,
    "reviewerEmail": string
}

export interface IMeta{
    "createdAt": string,
    "updatedAt": string,
    "barcode": number,
    "qrCode": string
}
export interface IProduct {
    "id": number;
    "title": string;
    "description": string;
    "category": string;
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "tags": string[];
    "brand": string,
    "sku": string,
    "weight": number,
    "dimensions": {
        "width": number,
        "height": number,
        "depth": number
    },
    "warrantyInformation": string,
    "shippingInformation": string,
    "availabilityStatus": string,
    "reviews": IReview[];
    "returnPolicy": string,
    "minimumOrderQuantity": number,
    "meta": IMeta,
    "images": string[],
    "thumbnail": string;
}

export interface ICategory {
    "slug" : string,
    "name" : string,
    "url" : string
}

export type GetProductsInput = {
    limit?: number
    category?: string
    search?:string
}

export type GetProductsResponse = {
    products: IProduct[]
    limit: number;
    skip: number;
    total: number;
}

export type GetProductDetailInput = {
    id?: string
}
