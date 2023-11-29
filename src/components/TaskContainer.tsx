import {FC, PropsWithChildren} from 'react';
import css from "./main.module.css";
import {OneTask} from "./OneTask";
import {ILocal} from "../interfaces/localInterface";
import {ISetState} from "../types/ISetState";

interface IProps extends PropsWithChildren {
    tasks:ILocal[]
    flag: () => void
    setItemUpdate:ISetState<ILocal>
}

const TaskContainer:FC<IProps> = ({tasks, flag, setItemUpdate}) => {

    return (
        <div className={css.tasks}>
            {tasks.map((item, index) => <OneTask key={index} item={item} flag={flag} setItemUpdate={setItemUpdate}/>)}
        </div>
    );
};

export {TaskContainer};