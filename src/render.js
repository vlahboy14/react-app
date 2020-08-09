import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

export let rerenderDOM = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} />
        </BrowserRouter>, document.getElementById('root'));
}
