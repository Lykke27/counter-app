import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";

export function App() {
    useEffect(() => {
        let localStorageCount = localStorage.getItem("counterValue")
        let localStorageMin = localStorage.getItem("SettingsMin")
        let localStorageMax = localStorage.getItem("SettingsMax")
        let localStorageError = localStorage.getItem("error")
        if (localStorageCount) {
            let startCountValue = JSON.parse(localStorageCount)
            setCount(startCountValue)
        }
        if (localStorageError) {
            let startErrorValue = JSON.parse(localStorageError)
            setError(startErrorValue)
        }
        if (localStorageMin) {
            let oldStartValue = JSON.parse(localStorageMin)
            setMinValue(oldStartValue)
        }
        if (localStorageMax) {
            let oldMaxValue = JSON.parse(localStorageMax)
            setMaxValue(oldMaxValue)
        }
    }, [])


    const [count, setCount] = useState<number>(0);
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(count))
        localStorage.setItem("error", JSON.stringify(error))
    }, [count,error])

    function increment() {
        setCount(count + 1)
    }

    function reset() {
        setCount(minValue)
    }

    function setNewSettings(max: number, min: number) {
        setMaxValue(max)
        setMinValue(min)
        setCount(min)
        setError("")
        localStorage.setItem("SettingsMin", JSON.stringify(min))
        localStorage.setItem("SettingsMax", JSON.stringify(max))
    }

    function setErrorMessage(msg: string) {
        setError(msg)
    }

    return (
        <>
            <Settings minValue={minValue}
                      maxValue={maxValue}
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