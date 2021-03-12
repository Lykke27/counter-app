import React, {ChangeEvent, useState} from "react";
import {Button} from "../Button";
import "../Counter/Counter.css"
import {Values} from "./Values/Values";
import s from "./Settings.module.css"

export type StateType = {
    minValue: number
    maxValue: number
    count: number
    setNewSettings: (a: number, b: number) => void
    error: boolean
    setErrorMessage: () => void
}

export const Settings = (props: StateType) => {
    const [maxValue, setMaxValue] = useState(props.maxValue)
    const [minValue, setMinValue] = useState(props.minValue)


    const onChangeForMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setErrorMessage();
        let newMaxValue = Number.parseInt(e.currentTarget.value)
        setMaxValue(newMaxValue)
    }

    const onChangeForMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setErrorMessage();
        let newMinValue = Number.parseInt(e.currentTarget.value)
        setMinValue(newMinValue)
    }

    const setSettings = () => {
        props.setNewSettings(maxValue, minValue)
    }

    return (
        <div className="counter">
            <div className="screen">
                <div className={s.values}>
                    <Values title={"max value"} onChange={onChangeForMaxValue} value={maxValue}/>
                    <Values title={"start value"} onChange={onChangeForMinValue} value={minValue}/>
                </div>
            </div>
            <div className="control">
                <Button
                    onClick={setSettings}
                    disabled={props.maxValue <= props.minValue ? true : false}
                    title='set'
                />
            </div>
        </div>
    )
}