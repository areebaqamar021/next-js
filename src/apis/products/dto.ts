export interface IReview {
    "rating": number,
    "comment": string,
    "date": string,
    "reviewerName": string,
    "reviewerEmail": string
}

export interface IMeta{
    "createdAt": IMeta,
    "updatedAt": IMeta,
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

export type GetProductsInput = {
    limit?: number
    category?: string
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
