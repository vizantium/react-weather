import {configureStore} from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import {useDispatch} from "react-redux";


export const store = configureStore({
    reducer: {
        searchSlice: searchSlice
    }
})
export type StateType = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()