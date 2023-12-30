import { createSlice } from "@reduxjs/toolkit";
import { PopupState } from "./types";
import { RootState } from "store";

const initialState: PopupState = {
    isOpen: false
}

const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        setOpen: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const popupReducer = popupSlice.reducer
export const { setOpen } = popupSlice.actions
export const selectedIsOpen = (state: RootState) => state.popup.isOpen;