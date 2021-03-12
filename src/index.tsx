import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";

ReactDOM.render(
    <React.StrictMode>
        <div className={"wrapper"}>
            <App maxValue={10} minValue={0}/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);


