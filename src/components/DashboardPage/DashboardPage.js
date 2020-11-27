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
    this.props.history.push(`/updateplant/${param}`);
}


    render() {
        return (
            <div>
            {this.props.store.plantsReducer.map( plant => {
              return (
              <div key={plant.id} className="plantDiv">
              <ul><li><img className="plantImage" src={plant.img_url} alt={plant.name}/></li>
                <li>Name: {plant.name}</li>
                <li>Type: {plant.type}</li>
                <li>Size: {plant.size}</li>
                <li>Notes: {plant.notes}</li>
                <li>List?: {plant.list}</li>
                <li>Sci Name: {plant.sci_name}</li>
                </ul>

                <button id="deleteBtn" onClick={(event) => this.deletePlant(event, plant.id)}>Delete Plant</button>
                <button id="editBtn" onClick={() => this.updateRoute(plant.id)}>Edit Plant</button>
              </div>
              );
            })}
          </div>
          // <div>
          //    <ul>
          //    {this.props.store.plantTypeReducer.map( plantType => {
          //      return (
          //        <li key={plantType.id}></li>
          //        <li>Type:{plantType.type}</li>
          //        </ul>
          //      )
          //  </div>
        );
    }
}
export default withRouter(connect (mapStoreToProps)(DashboardPage));