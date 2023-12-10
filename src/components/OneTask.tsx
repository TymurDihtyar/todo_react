import {FC, PropsWithChildren} from 'react';

import {ILocal} from "../interfaces/localInterface";
import {useAppDispatch} from "../hooks/reduxHooks";
import {toDoActions} from "../redux/slices/todoSlice";
import css from './main.module.css'

interface IProps extends PropsWithChildren {
    item: ILocal
}

const OneTask: FC<IProps> = ({item}) => {
    const dispatch = useAppDispatch();
    const {task} = item

    const del = () => {
        const tasks: ILocal[] = JSON.parse(localStorage.getItem('tasks'));
        tasks.splice(tasks.findIndex(elem => elem.task === task), 1);
        localStorage.setItem('tasks', JSON.stringify(tasks))
        dispatch(toDoActions.setFlag())
    }

    return (
        <div className={css.item}>
            <p>{task}</p>
            <div className={css.butts}>
                <button className={css.edit} onClick={() => dispatch(toDoActions.setItemUpdate({itemUpdate:item}))}>edit</button>
                <button className={css.del} onClick={del}>delete</button>
            </div>
        </div>
    );
};

export {OneTask};