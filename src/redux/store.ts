import {configureStore} from "@reduxjs/toolkit";
import {toDoReducer} from "./todoSlice";

const store = configureStore({
    reducer: {
        toDo:toDoReducer
    }
})

export {store}