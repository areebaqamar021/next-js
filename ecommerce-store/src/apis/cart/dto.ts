export interface ICartProduct {
  "id": number;
  "title": string;
  "price": number;
  "quantity": number;
  "total": number;
  "discountPercentage": number;
  "discountedTotal": number;
  "thumbnail": string;
}

export interface ICart {
  "id": number;
  "products": ICartProduct[];
  "total": number;
  "discountedTotal": number;
  "userId": number;
  "totalProducts": number;
  "totalQuantity": number;
}

export type GetCartResponse = {
  "carts": ICart[];
  "total": number;
  "skip": number;
  "limit": number;
}

export type GetCartInput = {
  user_id?: number
}

export type CreateCartInput = {
  userId: number;
  products: {
    id: number;
    quantity: number;
  }[]
}

export type UpdateCartInput = {
  cart_id: number;
  products: {
    id: number
    quantity: number
  }[]
}