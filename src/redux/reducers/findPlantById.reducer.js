
const plantByIdReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_PLANT_BY_ID':
            return action.payload;
        default:
            return state;
    }
}

export default plantByIdReducer;