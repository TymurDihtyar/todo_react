import {FC, PropsWithChildren} from 'react';
import css from "./main.module.css";
import {OneTask} from "./OneTask";
import {ILocal} from "../interfaces/localInterface";

interface IProps extends PropsWithChildren {
    tasks:ILocal[]
    flag: () => void
}

const TaskContainer:FC<IProps> = ({tasks, flag}) => {

    return (
        <div className={css.tasks}>
            {tasks.map((item, index) => <OneTask key={index} item={item} flag={flag}/>)}
        </div>
    );
};

export {TaskContainer};