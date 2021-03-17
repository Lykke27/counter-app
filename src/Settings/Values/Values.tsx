import React, {ChangeEvent} from "react";
import s from "./Values.module.css"

type ValuesPropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    title: string
}

export const Values = (props: ValuesPropsType) => {
    return (
        <span className={s.values}>
            {props.title}
            <input type={"number"} onChange={props.onChange} value={props.value}/>
        </span>
    )
}