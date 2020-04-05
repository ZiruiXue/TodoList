import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';
// import App from './App';
// import TodoListNew from './TodoListNew';
import TodoList3 from './TodoList3';
import { Provider } from 'react-redux';
import store from './store3';

// provider将store提供给内部所有组件，所以内部组件TodoList3都有能力获取store内容
const App = (
    <Provider store={store}>
        <TodoList3 />
    </Provider>
);


// ReactDOM.render(<TodoList />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<TodoListNew />, document.getElementById('root'));
ReactDOM.render(App, document.getElementById('root'));

