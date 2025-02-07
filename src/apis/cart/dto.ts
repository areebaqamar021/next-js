export class Product {
    "id": number;
    "title": string;
    "price": number;
    "quantity": number;
    "total": number;
    "discountPercentage": number;
    "discountedTotal": number;
    "thumbnail": string;
  }
  
  export class Cart {
    "id": number;
    "products": Product[];
    "total": number;
    "discountedTotal": number;
    "userId": number;
    "totalProducts": number;
    "totalQuantity": number;
  }
  
  export class CartResponse {
    "carts": Cart[];
    "total": number;
    "skip": number;
    "limit": number;
  }

  export type GetCartByUser = {
    user_id?: string
  }
  