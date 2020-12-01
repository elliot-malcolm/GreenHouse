import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//get all comments

function* fetchComments(action) {
    try{
      const commentResponse = yield axios.get(`/api/comment`, action.payload)
      yield put({type: `SET_COMMENTS`, payload: commentResponse.data})
    } catch(error){
      console.log('Error in fetch',error);
    }
  } 

    function* commentSaga() {
      yield takeEvery('FETCH_COMMENTS', fetchComments);
    }
  export default commentSaga;


