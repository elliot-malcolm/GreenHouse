import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
    full_name: '',
    favorite_plant: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
        full_name: this.state.full_name,
        favorite_plant: this.state.favorite_plant
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="full_name">
            Full Name:
            <input
              type="text"
              name="full_name"
              value={this.state.full_name}
              required
              onChange={this.handleInputChangeFor('full_name')}
            />
          </label>
        </div>
        {/* <div>
            <label htmlFor="favorite_plant">
          Favorite Plant:
            <select 
              name="favorite_plant" 
              id="favorite_plant"
              required 
              value={this.state.favorite_plant} 
              onChange={this.handleInputChangeFor('favorite_plant')>
                <option value='fyccus'>Fyccus</option>
                <option value='snake'>Snake</option>
            </select>
            </label>
        </div> */}
        <div>
          <input className="btn" type="submit" name="submit" value="Register" />
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
