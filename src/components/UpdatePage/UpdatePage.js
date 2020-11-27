import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Route , withRouter} from 'react-router-dom';


class UpdatePlantsPage extends Component {

    state = {
        plant: {
          name: '',
          size: '',
          notes: '',
          list: '',
          type: '', //populated from plant_type table
          sci_name: '', //populated from plant_type table
          img_url: '', //populated from plant_type table
          id: '',
            }
        }
    

    componentDidMount = () => {
        console.log(this.props.match.params.id);
        this.setState({
            plant: {
                id: this.props.match.params.id
            }
        }
        )
        console.log();
    }

    updatePlant = () => {
        console.log(this.state)
    
        this.props.dispatch({
          type: 'UPDATE_PLANT',
          payload: this.state
        })
        this.props.history.push('/info')
      }


    handleInputChangeForType = (event, input) => {
        for (let plantType of this.props.store.plantTypeReducer) {
            console.log(plantType.id);
            let plantObj = {}
            if (plantType.id === Number(event.target.value)) {
                plantObj = plantType 
                console.log('plantobj', plantObj);
                this.setState({
                    plant: {
                        ...this.state.plant, 
                    type: plantObj.type,
                    sci_name: plantObj.sci_name,
                    img_url: plantObj.img_url,
                    }
                });
            }
        }
    };
    
      handleInputChangeFor = (event, input) => {
            this.setState({
            plant: {
                ...this.state.plant, 
            [input]: event.target.value
            }
        });
      }

    render() {
        return (
        <div id="addPlantForm">
            <div>
                    <label htmlFor="name">
                    What should we call your plant?:
                        <input type="text" placeholder="name" 
                        onChange={(event) => this.handleInputChangeFor(event, 'name')}/>
                    </label>
            </div>
            <div>
                <label htmlFor="type">
                   <div>
                   What type is your plant?:
                            <select 
                                name="type"
                                id="type"
                                onChange={(event) => this.handleInputChangeForType(event, 'type.id')}>
                                <option>Got no type?</option>
                            {this.props.store.plantTypeReducer.map((plantType) => {
                                // let plantValue = { 
                                //     type: plantType.type,
                                //     sci_name: plantType.sci_name,
                                //     img_url: plantType.img_url
                                // }
                                return (
                            <option value={plantType.id} key={plantType.id}>{plantType.type}</option>
                            
                            )
                            })}
                            </select>
                        
                    </div>
                </label>
            </div>
            <div>
                     <label htmlFor="size">
                        How large is your plant?:
                        <select 
                            name="size" 
                            id="size"
                            placeholder="Optional"
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
                        onChange={(event) => this.handleInputChangeFor(event, 'notes')}
                        />
                    </label>
                </div>
                <button onClick={this.updatePlant}>Save Updates</button>
        </div>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(UpdatePlantsPage));