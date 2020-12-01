import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import plants from './plants.reducer.js'
import plantTypeReducer from './plant_type.reducer.js'
// import updatePlants from './updateplant.reducer.js'
import plantByIdReducer from './findPlantById.reducer.js'
import comments from './comments.reducer.js'

// a root reducer to fire all reducers

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  plants, 
  plantTypeReducer,
  plantByIdReducer,
  comments,
});

export default rootReducer;
