import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "services";
import { User, UserDTO } from "types";
import { RootState } from 'store';

interface UserState {
    user: User | null
    isAuthenticated: boolean
}

const initialState: UserState = {
    user: null,
    isAuthenticated: false
}

const authorizationSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => localStorage.removeItem("token")
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
                state.user = action.payload
                state.isAuthenticated = true
            })
            .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action: any) => {
                state.user = action.payload
                state.isAuthenticated = true
            })
    }
})

export const authorization = authorizationSlice.reducer
export const userState = (state: RootState) => state.authorization.user
export const { logout } = authorizationSlice.actions