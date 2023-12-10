import {configureStore} from "@reduxjs/toolkit";
import {toDoReducer} from "./slices/todoSlice";

const store = configureStore({
    reducer: {
        toDo:toDoReducer
    }
})

export {store}