import React, {ChangeEvent} from "react";

type ValuesPropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    title: string
}

export const Values = (props: ValuesPropsType) => {
    return (
        <span>
            {props.title}
            <input type={"number"} onChange={props.onChange} value={props.value}/>
        </span>
    )
}