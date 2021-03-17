import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";

export type StateType = {
    minValue: number
    maxValue: number
}

export function App(props: StateType) {
    const [count, setCount] = useState<number>(props.minValue);
    const [minValue, setMinValue] = useState<number>(props.minValue)
    const [maxValue, setMaxValue] = useState<number>(props.maxValue)
    const [error, setError] = useState<string>("")

    function increment() {
        count !== maxValue ? setCount(count + 1) : setError("")
    }

    function reset() {
        setCount(minValue)
    }

    function setNewSettings(max: number, min: number) {
        setMaxValue(max)
        setMinValue(min)
        setCount(min)
        setError("")
    }

    function setErrorMessage(msg:string) {
        setError(msg)
    }

    return (
        <>
            <Settings minValue={props.minValue}
                      maxValue={props.maxValue}
                      count={count}
                      setNewSettings={setNewSettings}
                      setErrorMessage={setErrorMessage}
                      error={error}
            />


            <Counter minValue={minValue}
                     maxValue={maxValue}
                     count={count}
                     increment={increment}
                     reset={reset}
                     error={error}
            />
        </>
    );
}