import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';


class CreatePlantPage extends Component {

    state = {
        plant: {
          name: '',
          size: '',
          notes: '',
          list: '',
          type: '', 
          sci_name: '', 
          img_url: '' 
            }
        //   user_id:''
        }
    

    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_PLANTS'
        })
        this.props.dispatch({
            type: 'FETCH_PLANT_TYPE'
        })
    }

    addToGarden = () => {
        console.log('clicked', this.state);
        this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.plant})
        this.props.history.push(`/info`)
        };


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
        console.log('event value', event.target.value, JSON.stringify(event.target.value));
      }

    render() {
        return (
        <>
        {/* <div> */}
            <div className="container">
                 <span
                className="plantEmoji"
                role="img"
                aria-label=""
                aria-hidden="true"
                >
                🌱
                </span>
            </div>
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
                <button onClick={this.addToGarden}>Add to Garden</button>
        </div>
        </>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(CreatePlantPage));