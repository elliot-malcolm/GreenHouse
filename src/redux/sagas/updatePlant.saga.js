import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//send axios request to shelf.router to get all items from shelf DB
function* updatePlant(action) {
  try{
    const results = yield axios.put(`/api/plantupdate/${action.payload}`)  
    if (results.data.rowCount === 0) {
        alert(`Failed to update!`)
    } else {
        yield put({
            type: "FETCH_PLANTS"
        })
    }
    } catch(error){
    console.log('Error in update plant SAGA',error);
  }
}

function* updatePlantSaga() {
    yield takeEvery('UPDATE_PLANT', updatePlant);
  }

export default updatePlantSaga;