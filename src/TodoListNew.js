import React, { Component } from 'react';
import 'antd/dist/antd.css'
//  /index.js可以省略不写
import store from './store/index.js';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction, getInitList} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios';

class TodoListNew extends Component {

    // store提供了getState的方法
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        // 订阅store, 一旦store发生改变，就会执行handleStoreChange
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodoListUI 
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                handleInputChange = {this.handleInputChange}
                handleBtnClick = {this.handleBtnClick}
                handleItemDelete = {this.handleItemDelete}
            />
            // <div style={{marginTop: '10px',marginLeft:'10px'}}>
            // <div>
            //     <Input 
            //         value = {this.state.inputValue} 
            //         placeholder = 'todo info' 
            //         style={{width : '300px', marginRight: '10px'}}
            //         onChange = {this.handleInputChange}
            //     />
            //     <Button  type ="primary" onClick = {this.handleBtnClick} >submit</Button>
            // </div>
            // <List
            //     style={{marginTop:'10px', width:'300px'}}
            //     bordered
            //     dataSource={this.state.list}
            //     renderItem={(item,index) => (<List.Item onClick = {this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
            // />
            // </div>
        )
    }

    // 复习之前axios获取数据,实现了从json文件获取初始list
    // 调用actionCreator中的请求
    // 发送给store，action会自动执行
    // componentDidMount() {
    //     const action = getTodoList();
    //     store.dispatch(action);
    // }


    componentDidMount() {
        const action = getInitList();
        store.dispatch(action);
    }
    

    handleStoreChange() {
        this.setState(store.getState());
    }

    // action中type描述要做什么
    // 调用dispatch既可以传给store
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    // button改变数据，创建一个action
    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

}

export default TodoListNew;