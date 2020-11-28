import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import addPlantSaga from './addPlant.saga'
import plantsSaga from './plants.saga';
import deletePlantSaga from './deletePlant.saga'
import plantTypeSaga from './plantType.saga';
import updatePlantSaga from './updatePlant.saga';
import findPlantSaga from './findPlantById.saga';
import commentSaga from './comments.saga'
import addCommentSaga from './addcomments.saga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    addPlantSaga(),
    plantsSaga(),
    deletePlantSaga(),
    plantTypeSaga(),
    updatePlantSaga(),
    findPlantSaga(),
    commentSaga(),
    addCommentSaga()
  ]);
}
