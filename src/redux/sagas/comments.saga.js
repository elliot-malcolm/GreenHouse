import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* addComment(action) {
    try {
          // passes the plant to the server
        yield axios.post('/api/comment', action.payload);
        yield put({
          type:"FETCH_COMMENTS"
        })
      } catch (error) {
        console.log('Error with comment posting', error);
      }
    }
    
    function* addCommentSaga() {
      yield takeLatest ('ADD_PLANT', addComment);
    }
    
    export default addCommentSaga;


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