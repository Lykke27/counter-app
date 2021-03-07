import React, {useState} from "react";
import {Button} from "../Button";
import "./Counter.css"
import {store, storePropsType} from "../Store/store";


export const Counter = (props: storePropsType) => {
    const [count, setCount] = useState<number>(props.startingValue);

    const increment = () => {
        if (count !== props.maxValue) {
            setCount(count + 1)
        }
    }

    const reset = () => {
        setCount(props.startingValue)
    }

    return (
        <div className="counter">
            <div className="screen">
                <p className={count === props.maxValue ? "error" : ""}>
                    {count}
                </p>
            </div>
            <div className="control">
                <Button onClick={increment}
                        disabled={count === props.maxValue}
                        title='inc'
                />

                <Button onClick={reset}
                        disabled={count === props.startingValue}
                        title='res'
                />
            </div>
        </div>
    )
}