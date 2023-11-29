import {FC, PropsWithChildren} from 'react';

import css from './main.module.css'
import {ILocal} from "../interfaces/localInterface";
import {ISetState} from "../types/ISetState";

interface IProps extends PropsWithChildren {
    item: ILocal
    flag: () => void
    setItemUpdate: ISetState<ILocal>
}

const OneTask: FC<IProps> = ({item, flag, setItemUpdate}) => {
    const {task} = item

    const del = () => {
        const tasks: ILocal[] = JSON.parse(localStorage.getItem('tasks'));
        const del = tasks.findIndex(elem => elem.task === task)
        tasks.splice(del, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks))
        flag()
    }

    return (
        <div className={css.item}>
            <p>{task}</p>
            <div className={css.butts}>
                <button className={css.edit} onClick={() => setItemUpdate(item)}>edit</button>
                <button className={css.del} onClick={del}>delete</button>
            </div>
        </div>
    );
};

export {OneTask};