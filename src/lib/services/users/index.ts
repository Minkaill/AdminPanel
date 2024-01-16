import { api } from "api";
import { Users } from "types";

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<Users, void>({
            query: () => ({
                url: "users?populate=*",
                method: "GET"
            })
        })
    })
})

export const { useGetUsersQuery } = userApi