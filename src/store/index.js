import { createStore, applyMiddleware,compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import TodoSagas from './sagas';
// import thunk from 'redux-thunk';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),

// );

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);

// 第二个参数是，如果window下有redux浏览器扩展就使用这个工具
const store = createStore(reducer,enhancer);

sagaMiddleware.run(TodoSagas);


export default store;



