import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//send axios request to plant.router to get update plant by ID

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