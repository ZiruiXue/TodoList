import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';


class TodoList extends Component{
    // constrcutor最优先执行，接受参数props，我们操作数据，绑定数据
    // super指父类
    constructor(props){
        super(props);
        this.state = {
            // input框中的内容, 绑定到input框, 为了动态的输入，为input框绑定事件，监听
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return(
            // jsx中，render函数返回内容必须整体包含在一个div标签中
            // 也可以通过引入fragment，占位符，隐藏外层标签
            <Fragment>
                <div>
                    {/* label的作用，扩大点击内容，点击label上字时就可以将光标打在输入框中 */}
                    <label htmlFor="insertArea">输入内容</label>
                    {/* 必须要加大括号, onChange绑定事件  */}
                    <input 
                        id = "insertArea"
                        // 样式的class与类重名，要用className
                        className = 'inputstyle'
                        value = {this.state.inputValue}
                        // 明确this的指向,一般放在constructor中节约性能
                        onChange = {this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>submit</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    // 实现了获取数据，并且将数据存在list中，将其挂载在页面上
    componentDidMount() {
        axios.get('http://localhost.charlesproxy.com:3000/list.json')
        .then((res) => {
            console.log(res);    
            this.setState(() => ({
                list: [...res.data]
            }));    
        })
        .catch(() => {alert('error')})
    }

    getTodoItem() {
        // 把ul的代码copy到gettodoitem，最后要return
        return this.state.list.map((item,index) => {
            return (
                <TodoItem 
                    key = {index}
                    content={item} 
                    index={index}
                    deleteItem = {this.handleItemDelete}
                />
            )
        })
    }


    // 更推荐的写法，返回一个函数,异步设置数据，需要先做一个保存
    handleInputChange(e) {
        const value = e.target.value;
        // const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }));
    }


    // 可以接收prevStae参数,也就是this.State
    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list,prevState.inputValue], 
            inputValue: ''
        }));
    }


    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        });
    }

}
// 导出组件，外部才可以引用
export default TodoList;


