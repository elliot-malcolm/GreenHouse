import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* updatePlant(action) {
  console.log('saga firing', action.payload);
  try{
    yield axios.put(`/api/plant/${action.payload.id}`, action.payload.data); 
    yield put({
      type:"FETCH_PLANTS"
    })
    } catch(error){
    console.log('Error in update plant SAGA',error);
  }
}

function* updatePlantSaga() {
    yield takeEvery('UPDATE_PLANT', updatePlant);
  }

export default updatePlantSaga;