import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './AccountButton.css';




const AccountButton = (props) => (
    <button id="logOutBtn"
 
      className={props.className}
      onClick={() => props.dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </button>
  );
      
      export default withRouter(connect()(AccountButton));