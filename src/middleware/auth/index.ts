import { createListenerMiddleware } from "@reduxjs/toolkit";
import { authApi } from "services";
import Cookies from "js-cookie";

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    matcher: authApi.endpoints.login.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners()

        if (action.payload.jwt) {
            Cookies.set("token", action.payload.jwt)
        }
    }
})