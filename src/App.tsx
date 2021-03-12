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

    let [minValue, setMinValue] = useState<number>(props.minValue)
    let [maxValue, setMaxValue] = useState<number>(props.maxValue)
    let [error, setError] = useState<boolean>(false)

    function increment() {
        count !== maxValue ? setCount(count + 1) : setError(true)
    }

    function reset() {
        setCount(minValue)
    }

    function setNewSettings(max: number, min: number) {
        setMaxValue(max)
        setMinValue(min)
        setCount(min)
        setError(false)
    }

    function setErrorMessage() {
        setError(true)
    }

    return (
        <>
            <Settings minValue={props.minValue}
                      maxValue={props.maxValue}
                      count={count}
                      error={error}
                      setNewSettings={setNewSettings}
                      setErrorMessage={setErrorMessage}
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