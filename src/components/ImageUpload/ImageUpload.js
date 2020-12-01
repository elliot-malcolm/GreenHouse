import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
// import ProgressCircle from "./ProgressCircle" //material UI progress, this is optional


class ImageUpload extends Component {
  handleFinishedUpload = (info) => {
    this.props.dispatch({
      type: 'POST_IMAGE_URL',
      payload: info.fileUrl,
    });
  }
  // };
//   state = {
//     content: (<div id="not-hidden">Click To Upload Drawings</div>)
//   }
//   renderImage = ({uploadedFile}) => 
//   (<div className="rdsu-image"><img src={uploadedFile.fileUrl} id="up-img"/></div>) //optional, only for styling
  
//   renderProgress = ({progress}) => (progress ? (
//         <div id="progress-outer-div"><ProgressCircle progress={progress}/></div>
//   ) : null) // this is optional only if you want to style a progress bar for your image upload
//   hideMe = () =>{
//     this.setState({
//       content:null
//     })
//   } //optional, only for styling
  
  render() {
    const uploadOptions = {
      server: 'http://localhost:5000',
    //   signingUrlQueryParams: {uploadType: 'avatar'},
    }
    const s3Url = 'https://imageuploadgreenhouse.s3.amazonaws.com'

    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
      />

      // AWS cloud serving in progress
//   render() {
//     const uploadOptions = {};
//     const s3Url = process.env.REACT_APP_S3_URL;
//     return (
//       <div>
//             <DropzoneS3Uploader
//               onClick={this.hideMe} //optional
//               imageComponent={this.renderImage} //optional
//               progressComponent={this.renderProgress} //optional
//               onFinish={this.handleFinishedUpload}
//               s3Url={s3Url}
//               maxSize={1024 * 1024 * 5}
//               upload={uploadOptions}
//               children={this.state.content} //optional
//             />
//       </div>
      );
    }
  }

export default connect()(ImageUpload);