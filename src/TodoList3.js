import React, {Component} from 'react';
import { connect } from 'react-redux';


class TodoList3 extends Component {
    render() {
        return (
            <div>
                <div>
                    <input value = {this.props.inputValue} onChange = {this.props.changeInputValue}/>
                    <button onClick = {this.props.handleClick}>submit</button>
                </div>
                <div>
                    <ul>
                        {
                            this.props.list.map((item,index) => {
                                return  <li key={index} onClick={() => { this.props.handleDelete(index)}}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// TodoList3和store做关联，
// mapDispatch指的是store.dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },
        handleDelete(index) {
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action);
        }
    }
}

// TodoList有能力和store做连接
export default connect(mapStateToProps,mapDispatchToProps)(TodoList3);
