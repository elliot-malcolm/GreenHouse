// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';

const plantTypeReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_PLANT_TYPE':
            return action.payload;
        default:
            return state;
    }
}

export default plantTypeReducer;