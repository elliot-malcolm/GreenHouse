import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* addPlant(action) {
  try {
        // passes the plant to the server
      yield axios.post('/api/plant', action.payload);
      yield put({
        type:"FETCH_PLANTS"
      })
    } catch (error) {
      console.log('Error with plant building', error);
    }
  }
  
  function* addPlantSaga() {
    yield takeLatest ('ADD_PLANT', addPlant);
  }
  
  export default addPlantSaga;