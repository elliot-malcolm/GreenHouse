import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import './ListPage.css'

class ListPage extends Component {

    state = {
        comment: {
            comment: '',
            commentor_name: ''
        }
            // {
            //     plant_id: this.props.store.plants[0]
            // }
        
    }

    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_PLANT_TYPE'
        })
        this.props.dispatch({
          type: 'FETCH_PLANTS'
      })
      }

    handleChange = (event, input) => {
        this.setState({
            comment: 
            {
            ...this.state.comment,
            [input]: event.target.value 
            }
        })
        // this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state})
    }

    addComment = ( plantId ) => {
        let comment = 
        { 
            comment: this.state.comment.comment,
            commentor_name: this.props.store.user.username,
            plant_id: plantId
        }
        console.log('clicked', this.state);
        this.props.dispatch({ type: 'ADD_COMMENT', payload: comment})
        // this.props.history.push(`/info`)
        console.log('add comment state', comment);
        };

    render() {
        return (
          
        <div> 
            
            {/* {JSON.stringify(this.props.store.comments)}  */}
            
            <div className="gardenListDiv">
                    <span
                    className="plantEmoji"
                    role="img"
                    aria-label=""
                    aria-hidden="true"
                    >
                    🌱
                    </span>
                
                    <h1>Plant List</h1>
                    </div>

            {this.props.store.plants.map( plant => {
              return (
            <>
        
              <div className='plantList'>
              
                {plant.list === true ? 
                <div key={plant.id} className="plantDiv">
                    <ul>
                        <div>
                            <div>
                                <img className="plantImage" src={plant.img_url} alt={plant.name}/>
                            </div>
                                    <li>Name: {plant.name}</li>
                                    <li>Type: {plant.type}</li>
                                    <li>Size: {plant.size}</li>
                                    <li>Scientific Name: {plant.sci_name}</li>
                                    <li>Notes: {plant.notes}</li>
                                    <br></br>
                                    <label htmlFor="comment">
                                        Comment:
                                            <input type="text" placeholder="comment" 
                                            // value={this.state.comment}
                                            onChange={(event) => this.handleChange(event, 'comment')}/>
                                    </label>
                                 <button onClick={(event) => this.addComment( plant.id )}>Submit Comment</button>
                        </div>
                    </ul>
                    </div>
                    : 
                    <>
                    </>
                }
              </div>
              
              </>
              );
            })}
            
          </div>
        );
    }
}
    export default withRouter(connect(mapStoreToProps)(ListPage));