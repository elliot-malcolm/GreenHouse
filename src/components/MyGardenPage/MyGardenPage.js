import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import DashboardPage from '../DashboardPage/DashboardPage';

import './MyGardenPage.css';

class MyGardenPage extends Component {

  componentDidMount = () => {
    this.props.dispatch({
        type: 'FETCH_PLANT_TYPE'
    })
  }

  render() {
    return (
      <div id="welcomeList">
          <>
          <span
            className="plantEmoji"
            role="img"
            aria-label=""
            aria-hidden="true"
            >
            🌱
            </span>
          <div className="plantDiv">
          <h1>MyGarden</h1>
            <DashboardPage />
            </div>
          </>
          {/* {JSON.stringify(this.props.store)} */}
          {/* {JSON.stringify(this.props.store.plantTypeReducer)} */}
          {/* <TypeDisplay /> */}
          {/* <TypeList /> */}
      </div>
    )
  }
}

export default connect(mapStoreToProps)(MyGardenPage);
