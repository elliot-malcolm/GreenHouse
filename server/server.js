
const express = require('express');
require('dotenv').config();
// const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const plantRouter = require('./routes/plant.router');
const plantTypeRouter = require('./routes/plant_type.router');
// const plantUpdateRouter = require('./routes/plant_update.router')
const commentRouter = require ('./routes/comments.router')
const UploaderS3Router = require ('react-dropzone-s3-uploader/s3router')
// const imageUrlRouter = require ('./routes/imageurl.router')


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/plant', plantRouter);
app.use('/api/plantType', plantTypeRouter);
app.use('/api/comment', commentRouter);
// app.use('/api/imageurl', imageUrlRouter)

// in Progress AWS connectivity for image upload
app.use('/s3', UploaderS3Router({
  bucket: 'imageuploadgreenhouse',                           // required
  region: 'us-east-2',                            // optional
  headers: {'Access-Control-Allow-Origin': '*'},  // optional
  ACL: 'public-read',                                 // this is the default - set to `public-read` to let anyone view uploads
}));

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
