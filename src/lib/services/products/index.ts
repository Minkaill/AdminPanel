import { api } from "api";
import { Products } from "models";

export const productsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<Products, void>({
            query: () => ({
                url: "products?populate=*",
                method: "GET"
            })
        })
    })
})

export const { useGetProductsQuery } = productsApi