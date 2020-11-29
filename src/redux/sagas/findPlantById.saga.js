import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* findPlantById(action) {
  console.log('saga firing', action.payload);
  try{
    const plantResponse = yield axios.get(`/api/plant/${action.payload.param}`); 
    yield put({type: `SET_PLANT_BY_ID`, payload: plantResponse.data})
    yield action.history.push(`/updateplant/${action.payload.param}`);
    console.log(plantResponse);
} catch (error){
    console.log('Error in fetchBYID SAGA',error);
  }
}

function* findPlantSaga() {
    yield takeEvery('FETCH_PLANT_BY_ID', findPlantById);
  }

export default findPlantSaga;