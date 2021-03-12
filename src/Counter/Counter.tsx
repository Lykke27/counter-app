import React from "react";
import {Button} from "../Button";
import "./Counter.css"

export type StateType = {
    maxValue: number
    minValue: number
    count: number
    increment: () => void
    reset: () => void
    error: boolean
}

export const Counter = (props: StateType) => {

    return (
        <div className="counter">
            <div className="screen">
                <p className={props.count === props.maxValue ? "error" : ""}>
                    {!props.error ? props.count : "Press set"}
                </p>
            </div>
            <div className="control">
                <Button onClick={props.increment}
                        disabled={props.count === props.maxValue || props.error}
                        title='inc'
                />

                <Button onClick={props.reset}
                        disabled={props.count === props.minValue || props.error}
                        title='res'
                />
            </div>
        </div>
    )
}