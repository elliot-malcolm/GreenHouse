import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import CommentsList from '../CommentsList/CommentsList';

import './DashboardPage.css'

class DashboardPage extends Component {

  componentDidMount = () => {
    this.props.dispatch({
        type: 'FETCH_PLANT_TYPE'
    })
    this.props.dispatch({
      type: 'FETCH_PLANTS'
  })
  }


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
    this.props.dispatch({
      type: 'FETCH_PLANT_BY_ID', payload: {param}, history: this.props.history 
    })
}


    render() {
        return (
          <div>
            {this.props.store.plants.map( (plant, index) => {
            if (plant.user_id == this.props.store.user.id) {
              return (
              <div id="dashboardList">
              <div key={plant.id} className="plantDiv">
              <h1>A {plant.size} {plant.type} named {plant.name}</h1>
              <div><img className="plantImage" src={plant.img_url} alt={plant.name}/></div>
              <div className='plantList'>
              <ul>
                <li>Type: {plant.type}</li>
                <li>Size: {plant.size}</li>
                {plant.list === true ?
                <li>List?: Yes</li>
                : 
                <li>List?: No</li>
              }
                <li>Scientific Name: {plant.sci_name}</li>
                <p>Notes: {plant.notes}</p>
              </ul>
              <button className="gardenBtn" onClick={(event) => this.deletePlant(event, plant.id)}>Delete Plant</button>
              <button className="gardenBtn" onClick={() => this.updateRoute(plant.id)}>Edit Plant</button>
              <CommentsList currentPlantIndex={index} />
              </div>
              </div>
              </div>
            
              );
            }})}
          </div>
        );
    }
}
export default withRouter(connect (mapStoreToProps)(DashboardPage));