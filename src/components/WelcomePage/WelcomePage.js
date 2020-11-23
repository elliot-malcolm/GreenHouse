import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import DashboardPage from '../DashboardPage/DashboardPage'
import TypeDisplay from '../TypeDisplay/TypeDisplay'
import './WelcomePage.css'

class WelcomePage extends React.Component {

  componentDidMount = () => {
    this.props.dispatch({
        type: 'FETCH_PLANT_TYPE'
    })
  }

  render() {
    return (
      <div id="welcomeList">
          <span
            className="plantEmoji"
            role="img"
            aria-label=""
            aria-hidden="true"
            >
            🌱
          </span>
          <h1>Hello World!</h1>
          <DashboardPage />
          
          {/* {JSON.stringify(this.props.store)}
          {JSON.stringify(this.props.store.plantTypeReducer)} */}
          <TypeDisplay />
      </div>
    )
  }
}

export default connect(mapStoreToProps)(WelcomePage);
