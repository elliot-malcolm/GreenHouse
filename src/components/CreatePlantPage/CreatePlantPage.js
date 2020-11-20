import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class CreatePlantPage extends Component {

    state = {
          name: '',
          size: '',
          notes: '',
          type: '', //populated from plant_type table
          scientific_name: '', //populated from plant_type table
          image_url: '', //populated from plant_type table
        };

        // get all plant_type -> arrayreducer for all objects + sagawatcher fetch plant_type info
        // loop through reducer to display "type" only in dropdown
        // selection of type inserts full info into local state + other info 

    createPlantObject = (event) => {
        event.preventDefault(); 

        this.props.dispatch({
            type: 'ADD_PLANT',
            payload: {
              name: this.state.name,
              type: this.state.type,
              size: this.state.size,
              notes: this.state.notes,
              type: '', //populated from plant_type table
              scientific_name: '', //populated from plant_type table
              image_url: '' // populated from plant_type table 
            },
          });
        };


    handleInputChangeFor = (propertyName) => (event) => {
        this.setState({
          [propertyName]: event.target.value,
        });
      };





    render() {
        return (
            <form className="formInput" onSubmit={this.createPlantObject}>
                <div>
                    <label htmlFor="name">
                    Plant's Name:
                        <input
                        type="text"
                        name="name"
                        placeholder="What's your plant's name?"
                        value={this.state.name}
                        onChange={this.handleInputChangeFor('name')}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="size">
                    Favorite Plant:
                        <select 
                            name="size" 
                            id="size"
                            placeholder="Optional"
                            value={this.state.size}
                            onChange={this.handleInputChangeFor('size')}
                        >
                        <>
                        <option>How large is your plant?</option>
                        <option value='smol'>Smol</option>
                        <option value='adult'>Medium</option>
                        <option value='chonk'>Chonky</option>
                        </>
              </select>
            </label>
        </div>
                <div>
                    <label htmlFor="notes">
                    Plant's Name:
                        <input
                        type="text"
                        name="notes"
                        value={this.state.notes}
                        onChange={this.handleInputChangeFor('notes')}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="name">
                    Plant's Name:
                        <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        required
                        onChange={this.handleInputChangeFor('name')}
                        />
                    </label>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (reduxGo) => ({reduxGo})

export default connect(mapStoreToProps)(CreatePlantPage);