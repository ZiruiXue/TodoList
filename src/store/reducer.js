import {CHANGE_INPUT_VAL, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_LIST_ACTION } from './actionTypes'


// state整个记录本存储的数据
// 需要将state传递给store
const defaultState =  {
    inputValue: '123',
    list: []
}

// reducer拿到之前的数据，以及action当前要做的事情
// 如果传过来的action是change_input_value
// 对之前的state做一个深拷贝
// reducer 可以接收state，但是绝不能改变state
// return newState返回给了store，替换掉旧的store中的数据，再下一步就是更新组件
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VAL){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    // 向list数组增加一个数据，将input框清空
    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        // console.log(newState);
        return newState;
    }
    // 用splice删除特定index，删除一项
    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    // console.log(state,action);
    if(action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    return state;
}

 