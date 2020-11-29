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
          img_url: '', 
          user_id: this.props.store.user.id
            }
        }
    

    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_PLANTS'
        })
        this.props.dispatch({
            type: 'FETCH_PLANT_TYPE'
        })
        this.props.dispatch({
            type: 'FETCH_USER'
        })
        console.log(this.state.user_id);
    }

    addToGarden = () => {
        console.log('clicked', this.state);
        // this.setState({
        //     // ...this.state,
        //     plant: {
        //         user_id: (this.props.store.user.id)
        //     }
        // })
        this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.plant})
        this.props.history.push(`/info`)
        console.log(this.state.plant);
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
        {/* {JSON.stringify(this.state)} */}
        {/* <div> */}
            <div className="addPlantRow">
                <div className="addPlantColumn1">
                <li>What should we call your plant?:</li>
            </div>
                <div className="addPlantColumn2">
                        <label htmlFor="name">
                            <input type="text" placeholder="name" 
                            onChange={(event) => this.handleInputChangeFor(event, 'name')}/>
                        </label>
                </div>
            </div>
            <div className="addPlantRow">
                <div className="addPlantColumn1">
                <li>What type is your plant?</li>
                </div>
                <div className="addPlantColumn2">
                    <select name="type" id="type"
                                    onChange={(event) => this.handleInputChangeForType(event, 'type.id')}>
                                    <option>Got no type?</option>
                                    {this.props.store.plantTypeReducer.map((plantType) => {
                                        return (
                                            <option value={plantType.id} key={plantType.id}>{plantType.type}</option>
                                        )
                                    })}
                    </select>
                </div>
            </div>
            <div className="addPlantRow">
                <div className="addPlantColumn1">
                    <li>How large is your plant?:</li>
                </div>
                <div className="addPlantColumn2">
                    <label htmlFor="size">
                        <select 
                            name="size" 
                            id="size"
                            placeholder="Optional"
                            required
                            onChange={(event) => this.handleInputChangeFor(event, 'size')}
                            >
                            <>
                            <option>Plant Size?</option>
                            <option value='smol'>smol</option>
                            <option value='medium'>medium</option>
                            <option value='chonky'>chonky</option>
                            </>
                        </select>
                    </label>
                </div>
            </div>
            <div className="addPlantRow">
                <div className="addPlantColumn1">
                    <li>Add your plant to the list?</li>
                </div>
                <div className="addPlantColumn2">
                    <label htmlFor="list">
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
            </div>
            <div className="addPlantRow">
                <div className="addPlantColumn1">
                    <li>Notes:</li>
                </div>
                <div className="addPlantColumn2">
                <label htmlFor="notes">
                        <input
                        type="textbox"
                        id='notesText'
                        name="notes"
                        onChange={(event) => this.handleInputChangeFor(event, 'notes')}
                        />
                    </label>
                </div>
            </div>
                <button id="createPlantBtn" onClick={this.addToGarden}>Add to Garden</button>
        {/* </div> */}
        </div>
        </>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(CreatePlantPage));