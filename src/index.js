import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Marina" },
    { id: 3, name: "Vasea" },
    { id: 4, name: "Sanea" },
    { id: 5, name: "Petya" },
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you ?" },
    { id: 3, message: "I`m fine" },
    { id: 4, message: "Thank you" },
  ];

  let postData = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "Hi, how are you?", likesCount: 10 },
  ];

ReactDOM.render(<App dialogsData={dialogsData} messagesData={messagesData} postData={postData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
