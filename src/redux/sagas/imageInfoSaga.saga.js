// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';

// function* postImageUrl(action) {
//   try {
//     const config = {
//           headers: { 'Content-Type': 'application/json' },
//           withCredentials: true,
//     };
//     console.log('posting in url');
//         const response = yield axios.post('/api/imageurl', action.payload, config);
//         console.log(response);
//       } catch (error) {
//         console.log('img url post failed', error);
//       }
//     }

// function* imageInfoSaga() {
//   yield takeLatest('POST_IMAGE_URL', postImageUrl);
// }


// export default imageInfoSaga;