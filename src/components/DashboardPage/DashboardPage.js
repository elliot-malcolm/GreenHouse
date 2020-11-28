import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

import './DashboardPage.css'

class DashboardPage extends Component {

  componentDidMount = () => {
    this.props.dispatch({
        type: 'FETCH_PLANT_TYPE'
    })
    this.props.dispatch({
      type: 'FETCH_PLANTS'
  })
    // setState({

    // })
  }
  
  // componentDidMount = () => {
  //   this.props.dispatch({
  //       type: 'FETCH_PLANT_TYPE'
  //   })
  // }

  deletePlant = (event, param) => {
    console.log(event, param)
    let plantData = {
      id: param
    }
    this.props.dispatch({
      type: 'DELETE_PLANT',
      payload: plantData
    })
  }

  updateRoute = ( param ) => {
    // this.props.history.push(`/updateplant/${param}`);
    this.props.dispatch({
      type: 'FETCH_PLANT_BY_ID', payload: {param}, history: this.props.history 
    })
}


    render() {
        return (
          <div>
            {this.props.store.plantsReducer.map( plant => {
              return (
                <>
              <div key={plant.id} className="plantDiv">
              <div><img className="plantImage" src={plant.img_url} alt={plant.name}/></div>
              <ul>
                <li>Name: {plant.name}</li>
                <li>Type: {plant.type}</li>
                <li>Size: {plant.size}</li>
                <li>Notes: {plant.notes}</li>
                {plant.list === true ?
                <li>List?: Yes</li>
                : 
                <li>List?: No</li>
              }
                <li>Sci Name: {plant.sci_name}</li>
              </ul>
              <button id="deleteBtn" onClick={(event) => this.deletePlant(event, plant.id)}>Delete Plant</button>
              <button id="editBtn" onClick={() => this.updateRoute(plant.id)}>Edit Plant</button>
              </div>
              </>
              );
            })}
            
          </div>
        );
    }
}
export default withRouter(connect (mapStoreToProps)(DashboardPage));