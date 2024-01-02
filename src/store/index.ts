import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { popupReducer } from "actions";
import { api } from "api";
import { listenerMiddleware } from "middleware";
import { authApi } from "services";

export const store = configureStore({
    reducer: {
        "api": api.reducer,
        "authApi": authApi.reducer,

        popup: popupReducer,
    },
    middleware: (getDefaultMidddleware) =>
        getDefaultMidddleware()
            .concat(api.middleware)
            .prepend(listenerMiddleware.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;