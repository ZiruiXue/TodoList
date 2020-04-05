import {takeEvery, put} from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import {initListAction} from './actionCreators'
import axios from 'axios';

// try catch处理数据异常
function* getInitList() {
    try{
            // 等数据获取完毕，存在res中
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        // yeild,等执行结束后，继续向后执行代码
        yield put(action);
    }catch(e) {
        console.log('网络请求失败！');
    }
}

// generator函数
// 接收到GET_INIT_LIST类型的action时，执行getInitList
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;



