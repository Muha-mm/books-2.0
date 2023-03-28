import booksReducer from "./Reducers/booksReducer";
import { configureStore } from "@reduxjs/toolkit";

let store = configureStore({
    reducer: {
        books: booksReducer
    }
})

export default store