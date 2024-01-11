import { api } from "api";
import { Orders } from "types";

export const ordersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query<Orders, void>({
            query: () => ({
                url: "orders?populate=*",
                method: "GET"
            })
        })
    })
})

export const { useGetOrdersQuery } = ordersApi