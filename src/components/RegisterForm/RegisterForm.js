import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './RegisterForm.css'

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
    full_name: '',
    favorite_plant: '',
    experience_level: '',
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_PLANT_TYPE'
    })
  }

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
        full_name: this.state.full_name,
        favorite_plant: this.state.favorite_plant,
        experience_level: this.state.experience_level
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
        <h2>New User</h2>
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
              placeholder="Enter your name"
              required
              onChange={this.handleInputChangeFor('full_name')}
            />
          </label>
        </div>
        <div>
            <label htmlFor="favorite_plant">
            Favorite Plant:
              <select 
                name="favorite_plant" 
                id="favorite_plant"
                placeholder="Optional"
                required
                onChange={this.handleInputChangeFor('favorite_plant')}>
                {this.props.store.plantTypeReducer.map((plantType) => {
                  return (
                <option value={plantType.type} key={plantType.id}>{plantType.type}</option>
                )
              })}
                // <option>Select A Plant</option>
              </select>
            </label>
        </div>
        <br></br>
        <div>
          <label htmlFor="ecological_region">
          Experience Level:
            <select 
              name="experience_level" 
              id="experience_level"
              placeholder="Optional"
              value={this.state.experience_level}
              onChange={this.handleInputChangeFor('experience_level')}
              >
              <>
              <option>Select An Experience Level</option>
              <option value='Killer of Plants'>Killer of Plants</option>
              <option value='Plant Parent'>Plant Parent</option>
              <option value='Green Thumb'>Green Thumb</option>
              <option value='Master Gardener'>Master Gardener</option>

              </>
            </select>
          </label>
      </div>
        <div>
          <input id="registerBtn" className="btn" type="submit" name="submit" value="Register" />
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
