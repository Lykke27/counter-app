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
                <p className={props.error === "incorrect value" || props.count === props.maxValue ? "error" : ""}>
                    {props.error === '' ? props.count : props.error}
                </p>
            </div>
            <div className="control">
                <Button onClick={props.increment}
                        disabled={props.error === '' && props.count !== props.maxValue ? false : true}
                        title='inc'
                />

                <Button onClick={props.reset}
                        disabled={props.count === props.minValue || props.error !== ''}
                        title='res'
                />
            </div>
        </div>
    )
}