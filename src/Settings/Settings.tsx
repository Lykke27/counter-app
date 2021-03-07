import React, {ChangeEvent, useState} from "react";
import {Button} from "../Button";
import "../Counter/Counter.css"
import {Values} from "./Values/Values";
import {store} from "../Store/store";

export const Settings = () => {
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)

    const newMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setMaxValue(e.currentTarget.value)
    }

    const newStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setStartValue(e.currentTarget.value)
    }

    const setNewSettings = () => {
        debugger
        store.maxValue = maxValue
        store.startingValue= startValue
    }

    return (
        <div className="counter">
            <div className="screen">
                <div className={maxValue <= startValue ? "error" : "values"}>
                    <Values title={"max value"} onChange={newMaxValue} value={maxValue}/>
                    <Values title={"start value"} onChange={newStartValue} value={startValue}/>
                </div>
            </div>
            <div className="control">
                <Button onClick={setNewSettings}
                        disabled={maxValue <= startValue ? true : false}
                        title='set'
                />
            </div>
        </div>
    )
}