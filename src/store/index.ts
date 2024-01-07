import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { popup } from "actions";
import { api } from "api";
import { listenerMiddleware } from "middleware";
import { productsApi } from "services";
import { authorization } from 'actions';

export const store = configureStore({
    reducer: {
        "api": api.reducer,
        "productsApi": productsApi.reducer,
        
        authorization,
        popup
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