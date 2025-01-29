import { api } from "@src/lib";
import { useQuery } from "@tanstack/react-query";
import { GetProductsInput, Product } from "./dto";

export const useGetProducts = ({ limit }: GetProductsInput) => useQuery({
    queryKey: ["products", limit],
    queryFn: async () => (await api.get<Product[]>("/products", {
        params: { limit }
    })).data,
})