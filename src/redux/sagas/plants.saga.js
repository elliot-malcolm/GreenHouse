import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//send axios request to plant.router to get all plants from DB
function* fetchPlants() {
  try{
    const plantsResponse = yield axios.get(`/api/plant`)
    yield put({type: `SET_PLANTS`, payload: plantsResponse.data})
  } catch(error){
    console.log('Error in fetch',error);
  }
}

function* plantsSaga() {
    yield takeEvery('FETCH_PLANTS', fetchPlants);
  }

export default plantsSaga;