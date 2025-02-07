import { api } from "@src/lib";
import { useQuery } from "@tanstack/react-query";
import { Cart, GetCartByUser } from "./dto";

export const useGetCartByUser = ({ user_id }: GetCartByUser) => useQuery({
    queryKey: ["carts", user_id],
    queryFn: async () => (await api.get<Cart>(`/carts/users/${user_id}`)).data,
    enabled: !!user_id
})