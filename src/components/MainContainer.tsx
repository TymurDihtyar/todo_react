import {FormContainer} from "./FormContainer";
import {TaskContainer} from "./TaskContainer";

import css from './main.module.css'
import {useEffect, useState} from "react";
import {ILocal} from "../interfaces/localInterface";

const MainContainer = () => {
    const [tasks, setTasks] = useState<ILocal[]>(null)
    const [triger, setTriger] = useState<boolean>(null)
    const [itemUpdate, setItemUpdate] = useState<ILocal>(null)
    const flag = () => setTriger(prev => !prev)

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks')) || [])
    }, [triger]);

    return (
        tasks && <div className={css.toDo}>
            <h2>To Do List</h2>
            <FormContainer tasks={tasks} flag={flag} itemUpdate={itemUpdate} setItemUpdate={setItemUpdate}/>
            <TaskContainer tasks={tasks} flag={flag} setItemUpdate={setItemUpdate}/>
        </div>
    );
};

export {MainContainer};