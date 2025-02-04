import { api } from "@src/lib";
import { useQuery, useMutation } from "@tanstack/react-query";
import { GetProductDetailInput, GetProductsInput, GetProductsResponse, IProduct, ICategory } from "./dto";

export const useGetProducts = ({ limit, category, search }: GetProductsInput) => useQuery({
    queryKey: ["products", limit, category, search],
    queryFn: async () => (await api.get<GetProductsResponse>(`/products${search ? "/search" : ""}${category ? `/category/${category}` : ""}`, {
        params: { limit, q: search }
    })).data,
})

export const useGetAllCategories = () => useQuery({
    queryKey: ["categories"],
    queryFn: async () => (await api.get<ICategory[]>("/products/categories")).data,
})

export const useGetProductDetail = ({ id }: GetProductDetailInput) => useQuery({
    queryKey: ["product-detail", id],
    queryFn: async () => (await api.get<IProduct>(`/products/${id}`)).data
})

// export const useAddToCart = () => useMutation({
//     mutationKey: ["cart"],
//     mutationFn: async () => (await api.get)
// })

