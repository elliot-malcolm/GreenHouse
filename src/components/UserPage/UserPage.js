import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div className="container">
         <span
        className="plantEmoji"
        role="img"
        aria-label=""
        aria-hidden="true"
    >
        🌱
    </span>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <h2>Your Name is: {this.props.store.user.full_name}</h2>
        <h2>Your ID is: {this.props.store.user.id}</h2>
        <h2>Your Favorite Plant Type is: {this.props.store.user.favorite_plant}</h2>
        <h2>Your Ecological Region is: {this.props.store.user.ecological_region}</h2>
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
