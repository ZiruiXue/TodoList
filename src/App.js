import React, { Component,Fragment } from 'react';
// 引入动画组件
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './style.css'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    // 实现点击toggle，文字hide，再一次点击，展示文字
    // 需要接触css来实现
    render() {
        return (
            <Fragment>
                <TransitionGroup>
                {
                    this.state.list.map((item,index) => {
                        return(
                            <CSSTransition
                            in = {this.state.show}
                            timeout = {1000}
                            classNames = 'fade'
                            unmountOnExit
                            onEntered = {(el) => {el.style.color='blue'}}
                            appear = {true}
                            key = {index}
                            >
                                <div>{item}</div>
                            </CSSTransition>
                        )
                    })
                }                    
                </TransitionGroup>

                <button onClick = {this.handleAddItem}>toggole</button>
            </Fragment>
        )
    }

    handleToggle(){
        this.setState({
            show: this.state.show ? false : true
        })
    }

    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }

}

export default App;

