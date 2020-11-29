import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addComment(action) {
    try {
        yield axios.post('/api/comment', action.payload, );
        // yield axios.get('/api/comment')
        yield put({
          type: "FETCH_COMMENTS",
          payload: action.payload
        })
      } catch (error) {
        console.log('Error with comment posting', error);
      }
    }

    function* addCommentSaga() {
      yield takeLatest ('ADD_COMMENT', addComment);
    }

    export default addCommentSaga;