import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//send axios request to plant_type.router to get all plants from DB
function* fetchPlantType() {
  try{
    const plantTypeResponse = yield axios.get(`/api/plant_type`)
    yield put({type: `SET_PLANT_TYPE`, payload: plantTypeResponse.data})
  } catch(error){
    console.log('Error in fetch',error);
  }
}

function* plantTypeSaga() {
    yield takeEvery('FETCH_PLANT_TYPE', fetchPlantType);
  }

export default plantTypeSaga;