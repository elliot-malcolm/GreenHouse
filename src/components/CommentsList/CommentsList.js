import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';


class CommentsList extends Component {

    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_PLANT_TYPE'
        })
        this.props.dispatch({
          type: 'FETCH_PLANTS'
      })
      this.props.dispatch({
        type: 'FETCH_COMMENTS'
    })
      }

//function to do if(check)

    render() {
        return (
          
        <div> 
{/*             
            {JSON.stringify(this.props.store.comments)}  */}
            {/* {JSON.stringify(this.props.dispatch ({
                type: "FETCH_COMMENTS"
            })
            )} */}

            {this.props.store.comments.map( comment => {
            if (Number(comment.plant_id) == Number(this.props.store.plants[this.props.currentPlantIndex].id)) {
              return (
              
                <div key={comment.id} className="commentDiv">
                    <p>
                        From {comment.commentor_name}: {comment.comment}
                    </p>
                </div>
              
            );
            
            } else {
                return (
                   <>
                   </>
                )
            }
            }
            )
            }
            
          </div>
        );
    }
}
    export default withRouter(connect(mapStoreToProps)(CommentsList));