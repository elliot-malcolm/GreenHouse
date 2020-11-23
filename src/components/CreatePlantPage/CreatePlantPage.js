import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class CreatePlantPage extends Component {

    state = {
        plant: {
          name: '',
          type: '', //populated from plant_type table
          size: '',
          notes: '',
          list: '',
          scientific_name: '', //populated from plant_type table
          image_url: '' //populated from plant_type table
        }
    }

    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_PLANTS'
        })
    }

    addToGarden = () => {
        console.log('clicked', this.state);
        this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.plant})
        };


    handleInputChangeFor = (event, input) => {
        this.setState({
            plant: {
                ...this.state.plant, 
            [input]: event.target.value
            }
        });
      };

    render() {
        return (
            // <form className="formInput" onSubmit={this.addToGarden}>
            <div>
            <div>
                    <label htmlFor="type">
                       What type is your plant?:
                        <input type="text" placeholder="name" 
                        onChange={(event) => this.handleInputChangeFor(event, 'name')}/>
                    </label>
            </div>
            <div>
                   <label htmlFor="type">
                       What type is your plant?:
                         <select 
                            name="type" 
                            id="type"
                            placeholder="Optional"
                            value={this.state.type}
                            onChange={(event) => this.handleInputChangeFor(event, 'type')}
                            >
                            <>
                            <option>Got no type?</option>
                            <option value='Monstera'>Monstera</option>
                            <option value='BoP'>BoP</option>
                            <option value='Aloe'>Aloe</option>
                            </>
                        </select>
                    </label>
            </div>
            <div>
                     <label htmlFor="size">
                        How large is your plant?:
                        <select 
                            name="size" 
                            id="size"
                            placeholder="Optional"
                            value={this.state.size}
                            required
                            onChange={(event) => this.handleInputChangeFor(event, 'size')}
                            >
                            <>
                            <option>Plant Size?</option>
                            <option value='Smol'>Smol</option>
                            <option value='Medium'>Medium</option>
                            <option value='Chonk'>Chonky</option>
                            </>
                        </select>
                    </label>
                </div>
                <div>
                     <label htmlFor="list">
                     List your plant?:
                         <select 
                            name="list" 
                            id="list"
                            placeholder="Optional"
                            value={this.state.list}
                            onChange={(event) => this.handleInputChangeFor(event, 'list')}
                            >
                            <>
                            <option>List your plant?</option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                            </>
                        </select>
                    </label>
                </div>
                <div>
                    <label htmlFor="notes">
                    Plant Notes:
                        <input
                        type="textbox"
                        id='notesText'
                        name="notes"
                        value={this.state.notes}
                        onChange={(event) => this.handleInputChangeFor(event, 'notes')}
                        />
                    </label>
                </div>
                <button onClick={this.addToGarden}>Add to Garden</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(CreatePlantPage);