import { api } from "api/baseQueryRTK";
import { User, UserDTO, UserLG, UserRG } from "types";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<User, UserRG>({
            query: (user) => ({
                url: "auth/local/register",
                method: "POST",
                body: user
            })
        }),
        login: builder.mutation<User, UserLG>({
            query: (user) => ({
                url: "auth/local",
                method: "POST",
                body: user
            })
        }),
        current: builder.query<UserDTO, void>({
            query: () => ({
                url: "users/me",
                method: "GET"
            })
        })
    })
})