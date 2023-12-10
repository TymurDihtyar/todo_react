import {createSlice} from "@reduxjs/toolkit";
import {ILocal} from "../../interfaces/localInterface";

interface IState {
    flag: boolean
    tasks: ILocal[]
    itemUpdate: ILocal
}

const initialState: IState = {
    flag: false,
    tasks: null,
    itemUpdate: null
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        setFlag: state => {
            state.flag = !state.flag
        },
        setTasks: (state, action) => {
            state.tasks = action.payload
        },
        setItemUpdate: (state, action) => {
            state.itemUpdate = action.payload.itemUpdate
        }
    }
})

const {reducer: toDoReducer, actions} = todoSlice
const toDoActions = {
    ...actions
}
export {toDoReducer, toDoActions}