import React, {ChangeEvent, useState} from "react";
import {store} from "../../Store/store";

type ValuesPropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    title: string
}

export const Values = (props: ValuesPropsType) => {
    // const onClick = () => props.onClick()


    return (
        <span>
            {props.title}
            <input type={"number"} onChange={props.onChange} value={props.value}/>
        </span>
    )
}