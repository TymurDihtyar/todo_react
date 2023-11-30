import {useAppSelector} from "../hooks/reduxHooks";

import css from "./main.module.css";
import {OneTask} from "./OneTask";

const TaskContainer = () => {
    const {tasks} = useAppSelector(state => state.toDo)

    return (
        <div className={css.tasks}>
            {tasks.map((item, index) => <OneTask key={index} item={item}/>)}
        </div>
    );
};

export {TaskContainer};