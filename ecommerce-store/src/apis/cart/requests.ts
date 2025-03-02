import { api, queryClient } from "@src/lib";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CreateCartInput, GetCartInput, GetCartResponse, ICart, UpdateCartInput } from "./dto";
import { AxiosResponse } from "axios";

export const useGetCart = ({ user_id }: GetCartInput) => useQuery<ICart>({
    queryKey: ["carts", user_id],
    queryFn: async () => (await api.get<GetCartResponse>(`/carts/user/${user_id}`)).data.carts[0] || null,
    enabled: !!user_id
})

export const useCreateCart = () => useMutation<GetCartResponse, string, CreateCartInput>({
    mutationKey: ["create-carts"],
    mutationFn: async (props) => (await api.post<CreateCartInput, AxiosResponse<GetCartResponse>>(
        '/carts/add',
        props
    )).data,
    onSuccess: (data, vatiables) => {
        queryClient.invalidateQueries({ queryKey: ["carts", vatiables.userId] })
    }
})

export const useUpdateCart = () => useMutation<GetCartResponse, string, UpdateCartInput>({
    mutationKey: ["update-cart"],
    mutationFn: async ({ cart_id, products }) => (await api.put<UpdateCartInput, AxiosResponse<GetCartResponse>>(
        `/carts/${cart_id}`,
        { products, merge: true }
    )).data
})