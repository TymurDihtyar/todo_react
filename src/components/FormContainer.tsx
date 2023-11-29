import {FC, PropsWithChildren} from 'react';
import {useForm} from "react-hook-form";
import css from "./main.module.css";
import {ILocal} from "../interfaces/localInterface";

interface IProps extends PropsWithChildren {
    tasks:ILocal[]
    flag: () => void
}

const FormContainer:FC<IProps> = ({tasks, flag}) => {
    const {reset, handleSubmit, register} = useForm()

    const save = (task: ILocal) => {
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        flag()
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)} className={css.inputElement}>
            <input type="text" placeholder={'Task'}{...register('task')}/>
            <button>Add Task</button>
        </form>
    );
};


export {FormContainer};