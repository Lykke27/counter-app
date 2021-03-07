import React, {ChangeEvent, useState} from "react";

type ValuesPropsType = {
    // onClick: () => void
    // disabled: boolean
    title: string
}

export const Values = (props: ValuesPropsType) => {
    // const onClick = () => props.onClick()
    const [value, setValue] = useState('0')

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <span>
            {props.title}
            <input type={"number"} onChange={changeValue} value={value}></input>
        </span>
    )
}