import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";

import {FormContainer} from "./FormContainer";
import {TaskContainer} from "./TaskContainer";
import {toDoActions} from "../redux/slices/todoSlice";
import css from './main.module.css'

const MainContainer = () => {
    const {tasks, flag} = useAppSelector(state => state.toDo)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(toDoActions.setTasks(JSON.parse(localStorage.getItem('tasks')) || []))
    }, [flag, dispatch]);

    return (
        tasks && <div className={css.toDo}>
            <h2>To Do List</h2>
            <FormContainer/>
            <TaskContainer/>
        </div>
    );
};

export {MainContainer};