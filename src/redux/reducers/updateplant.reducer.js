// import { put, takeLatest } from 'redux-saga/effects';

const updatePlants = (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_PLANT':
            return action.payload;
        default:
            return state;
    }
}

export default updatePlants;