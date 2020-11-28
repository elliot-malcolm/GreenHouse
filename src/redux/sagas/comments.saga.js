import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

//get all comments
function* fetchComments() {
    try{
      const commentResponse = yield axios.get(`/api/comment`)
      yield put({type: `SET_COMMENTS`, payload: commentResponse.data})
    } catch(error){
      console.log('Error in fetch',error);
    }
  } 

    function* commentSaga() {
      yield takeEvery('FETCH_COMMENTS', fetchComments);
    }
  export default commentSaga;


