import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import './ListPage.css'

class ListPage extends Component {

    state = {
            comment: '' 
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
            ...this.state, 
            [input]: event.target.value 
        })
        console.log(this.state.comment, 'comment');
    }

    render() {
        return (
            
        <div>  <div className="gardenListDiv">
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

            {this.props.store.plantsReducer.map( plant => {
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
                                    <li>Notes: {plant.notes}</li>
                                    <li>Scientific Name: {plant.sci_name}</li>
                                    <br></br>
                                    <label htmlFor="comment">
                                        Comment:
                                            <input type="text" placeholder="comment" 
                                            value={this.state.comment}
                                            onChange={(event) => this.handleChange(event, 'comment')}/>
                                    </label>
                                 <button >Submit Comment</button>
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