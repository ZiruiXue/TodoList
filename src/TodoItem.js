import React, { Component } from 'react'
import PropTypes from 'prop-types';


// 父组件向子组件传递数据，通过属性，子组件通过props接收
class TodoItem extends Component{

    constructor(props) {
        super(props);
        // 把绑定放在constructor中来做，节约性能
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps,nextState) {
        // 当组件内容发生变化，返回true
        if(nextProps.content !== this.props.content){
            return true;
        }
        return false;
    }

    render(){
        console.log('child --- render');
        const {content, test} = this.props ;
        return(
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }

    // 子组件修改父组件的内容，不允许直接修改，子组件想要调用父组件delete的方法，只需要从父组件传递过来
    handleClick(){
        // alert(this.props.index);
        const {deleteItem }= this.props;
        deleteItem(this.props.index);
    }
    
}


// 强校验，属性校验
// content 属性为string, deleteItem为function，index为number
TodoItem.propTypes ={
    content: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

export default TodoItem

