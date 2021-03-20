import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "../Button";
import "../Counter/Counter.css"
import {Values} from "./Values/Values";

export type StateType = {
    minValue: number
    maxValue: number
    count: number
    setNewSettings: (a: number, b: number) => void
    error: string
    setErrorMessage: (msg: string) => void
}

export const Settings = (props: StateType) => {

    useEffect(() => {
        let LocalStorageMin = localStorage.getItem("minValue")
        let LocalStorageMax = localStorage.getItem("maxValue")
        if (LocalStorageMin) {
            const startingMinValue = JSON.parse(LocalStorageMin)
            setMinValue(startingMinValue)
        }
        if (LocalStorageMax) {
            const startingMaxValue = JSON.parse(LocalStorageMax)
            setMaxValue(startingMaxValue)
        }
    }, [])

    const [maxValue, setMaxValue] = useState(props.maxValue)
    const [minValue, setMinValue] = useState(props.minValue)

    // useEffect(() => {
    //     localStorage.setItem("minValue", JSON.stringify(minValue))
    //     localStorage.setItem("maxValue", JSON.stringify(maxValue))
    // }, [minValue, maxValue])

    const onChangeForMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = parseInt(e.currentTarget.value)
        if (newMaxValue <= minValue) {
            props.setErrorMessage('incorrect value')
            setMaxValue(newMaxValue)
        } else if (newMaxValue > minValue) {
            props.setErrorMessage("Press set");
            setMaxValue(newMaxValue)
        }
    }

    const onChangeForMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setErrorMessage("Press set");
        let newMinValue = parseInt(e.currentTarget.value)
        if (newMinValue < 0 || newMinValue >= maxValue) {
            props.setErrorMessage("incorrect value");
            setMinValue(newMinValue)
        } else {
            setMinValue(newMinValue)
        }
    }

    const setSettings = () => {
        props.setNewSettings(maxValue, minValue)
        localStorage.setItem("minValue", JSON.stringify(minValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }

    return (
        <div className="counter">
            <div className="screen">
                <div>
                    <Values title={"max value"} onChange={onChangeForMaxValue} value={maxValue}/>
                    <Values title={"start value"} onChange={onChangeForMinValue} value={minValue}/>
                </div>
            </div>
            <div className="control">
                <Button
                    onClick={setSettings}
                    disabled={maxValue === minValue || maxValue < minValue || minValue < 0}
                    title='set'
                />
            </div>
        </div>
    )
}