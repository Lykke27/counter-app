import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Counter} from "./Counter/Counter";
import { Settings } from './Settings/Settings';
import {store} from "./Store/store";



ReactDOM.render(
    <React.StrictMode>
        <div className={"wrapper"}>
            <Settings/>
            <Counter startingValue={store.startingValue}  maxValue={store.maxValue} currentValue={0}/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);


