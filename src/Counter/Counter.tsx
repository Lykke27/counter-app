import React from "react";
import {Button} from "../Button";
import "./Counter.css"

export type StateType = {
    maxValue: number
    minValue: number
    count: number
    increment: () => void
    reset: () => void
    error: string
}

export const Counter = (props: StateType) => {

    return (
        <div className="counter">
            <div className="screen">
                <p className={props.error !== '' ? "error" : ''}>
                    {props.error === '' ? props.count : props.error}
                </p>
            </div>
            <div className="control">
                <Button onClick={props.increment}
                        disabled={props.count === props.maxValue || props.error==="Enter correct values"}
                        title='inc'
                />

                <Button onClick={props.reset}
                        disabled={props.count === props.minValue || props.error==="Enter correct values"}
                        title='res'
                />
            </div>
        </div>
    )
}