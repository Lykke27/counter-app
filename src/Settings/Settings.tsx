import React, {useState} from "react";
import {Button} from "../Button";
import "../Counter/Counter.css"
import {Values} from "./Values/Values";
import {store} from "../Store/store";

export const Settings = () => {
    const [value, setValue] = useState<number>(0);

    const maxValue = () => {
        if (value !== store.maxValue) {
            setValue(value + 1)
        }
    }

    return (
        <div className="counter">
            <div className="screen">
                <div className={"values"}>
                    <Values title={"max value"}/>
                    <Values title={"start value"}/>
                </div>
            </div>
            <div className="control">
                <Button onClick={maxValue}
                        disabled={false}
                        title='set'
                />
            </div>
        </div>
    )
}