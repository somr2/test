import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {toDo} from './Containers/ToDo/action_reducer'

import {staticMessage} from './Containers/StaticMessage/action_reducer'
import {dynamicMessage} from './Containers/DynamicMessage/action_reducer'
import {fetchData} from './Containers/FetchData/action_reducer'

const init = {
    fetchData:{
        url: 'https://jsonplaceholder.typicode.com/users',
        payloads: ['sdfsddf']
    },
    toDo:{
        tasks: ['from index','index 2'],
        input: ''
    },
    staticMessage:{
        message: 'empty message'
    },
    dynamicMessage:{
        message: 'empty message'
    }
    
}

// const init ={
//     url: 'https://jsonplaceholder.typicode.com/posts',
//         payloads: ['sdfsddf']
// }

// const store = createStore(dynamicMessage, init)

const store = createStore(combineReducers({toDo, staticMessage, dynamicMessage, fetchData}), init)

// console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
