import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import app from './reducers';

const initialState = {
    todos: [
      {
        id : 123456,
        value : "Eat chicken",
        completed : false
      },
      {
        id: 123457,
        value : "Feel at one with the world",
        completed : false
      },
      {
        id: 123357,
        value : "Exterminate the wasps",
        completed : false
      },
    ]
  }

const persistedState = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : initialState

const store = createStore(app, persistedState);

store.subscribe(() => {
    localStorage.setItem("todos", JSON.stringify(store.getState()))
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
