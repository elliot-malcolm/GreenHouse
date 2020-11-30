import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import image from './Untitled-2.png'

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Account';
  }

  return (
    <div className="nav">
      <Link to="/info">
        <h2 className="nav-title"><img id="greenHouseImage" src={image}></img></h2>
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
              <Link className="nav-link" to="/info">
              My Garden
              </Link>
              <Link id="plantLink" className="nav-link" to="/newplant">
              New Plant  
              </Link>
              <Link className="nav-link" to="/list">
              Plants List
              </Link>
              {/* <Link className="nav-link" to="/about">
              About
              </Link> */}
              {/* <AccountButton id="accountBtn" className="nav-link" /> */}
              <LogOutButton id="logOutBtn" className="nav-link" />
             
                  </>
                )}
                     <Link className="nav-link" to="/about">About</Link>
        {/* Always show this link since the about page is not protected */}
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
