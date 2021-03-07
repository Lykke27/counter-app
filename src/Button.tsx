import React from "react";

type ButtonPropsType = {
    onClick: () => void
    disabled: boolean
    title: string
}

export const Button = (props: ButtonPropsType) => {
    const onClick = () => props.onClick()

    return (
        <button onClick={onClick} disabled={props.disabled}>
            {props.title}
        </button>
    )
}