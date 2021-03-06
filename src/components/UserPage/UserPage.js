import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

// this component displays a User's Account page

class UserPage extends Component {

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
        {/* <h2>Your Name is: {this.props.store.user.full_name}</h2>
        <h2>Your ID is: {this.props.store.user.id}</h2> */}
        <h2>Your Favorite Plant is: {this.props.store.user.favorite_plant}</h2>
        <h2>Your Experience Level is: {this.props.store.user.experience_level}</h2>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
