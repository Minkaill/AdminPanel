import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "store";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).authApi.queries.jwt || localStorage.getItem("token");

        if (token && token !== null) {
            headers.set("authorization", `Bearer ${token}`)
        }
    }
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
});