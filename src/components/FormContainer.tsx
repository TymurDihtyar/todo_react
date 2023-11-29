import {FC, PropsWithChildren, useEffect} from 'react';
import {useForm} from "react-hook-form";
import css from "./main.module.css";
import {ILocal} from "../interfaces/localInterface";
import {ISetState} from "../types/ISetState";

interface IProps extends PropsWithChildren {
    tasks: ILocal[]
    flag: () => void
    itemUpdate: ILocal
    setItemUpdate:ISetState<ILocal>
}

const FormContainer: FC<IProps> = ({tasks, flag, itemUpdate, setItemUpdate}) => {
    const {reset, handleSubmit, register, setValue, formState:{isValid}} = useForm()

    useEffect(() => {
        if (itemUpdate) {
            setValue('task', itemUpdate.task)
        }
    }, [itemUpdate]);

    const save = (task: ILocal) => {
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        flag()
        reset()
    }
    const update = (task: ILocal) => {
        tasks[tasks.indexOf(itemUpdate)] = task
        localStorage.setItem('tasks', JSON.stringify(tasks))
        setItemUpdate(null)
        flag()
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