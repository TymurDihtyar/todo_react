import {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {ILocal} from "../interfaces/localInterface";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {toDoActions} from "../redux/slices/todoSlice";
import css from "./main.module.css";

const FormContainer = () => {
    let {itemUpdate} = useAppSelector(state => state.toDo)
    const dispatch = useAppDispatch();
    const {reset, handleSubmit, register, setValue, formState:{isValid}} = useForm()

    useEffect(() => {
        if (itemUpdate) {
            setValue('task', itemUpdate.task)
        }
    }, [itemUpdate, setValue]);

    const save = (task: ILocal):void => {
        const tasks: ILocal[] = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        dispatch(toDoActions.setFlag())
        reset()
    }
    const update = (task: ILocal):void => {
        const tasks: ILocal[] = JSON.parse(localStorage.getItem('tasks'));
        tasks[tasks.findIndex(elem => elem.task === itemUpdate.task)] = task
        localStorage.setItem('tasks', JSON.stringify(tasks))
        dispatch(toDoActions.setItemUpdate({itemUpdate:null}))
        dispatch(toDoActions.setFlag())
        reset()
    }

    return (
        <form onSubmit={handleSubmit(itemUpdate ? update : save)} className={css.inputElement}>
            <input type="text" placeholder={'task'}{...register('task')}/>
            <button disabled={!isValid}>{itemUpdate ? 'Update' : 'Add Task'}</button>
        </form>
    );
};


export {FormContainer};