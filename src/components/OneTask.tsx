import {FC, PropsWithChildren} from 'react';

import css from './main.module.css'
import {ILocal} from "../interfaces/localInterface";

interface IProps extends PropsWithChildren {
    item: ILocal
    flag: () => void
}

const OneTask: FC<IProps> = ({item, flag}) => {
    const {task} = item

    const edit = () => {

    }

    const del = () => {

    }

    return (
        <div className={css.item}>
            <p>{task}</p>
            <div className={css.butts}>
                <button className={css.edit} onClick={() => edit}>edit</button>
                <button className={css.del} onClick={() => del}>delete</button>
            </div>
        </div>
    );
};

export {OneTask};