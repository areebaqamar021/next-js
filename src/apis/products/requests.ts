import { api } from "@src/lib";
import { useQuery } from "@tanstack/react-query";
import { GetProductDetailInput, GetProductsInput, GetProductsResponse, IProduct } from "./dto";

export const useGetProducts = ({ limit, category }: GetProductsInput) => useQuery({
    queryKey: ["products", limit, category],
    queryFn: async () => (await api.get<GetProductsResponse>(`/products${category ? `/category/${category}` : ""}`, {
        params: { limit }
    })).data,
})

export const useGetAllCategories = () => useQuery({
    queryKey: ["categories"],
    queryFn: async () => (await api.get<string[]>("/products/categories")).data,
})

export const useGetProductDetail = ({ id }: GetProductDetailInput) => useQuery({
    queryKey: ["product-detail", id],
    queryFn: async () => (await api.get<IProduct>(`/products/${id}`)).data
})