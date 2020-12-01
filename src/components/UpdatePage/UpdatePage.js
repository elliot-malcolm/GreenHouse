import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter} from 'react-router-dom';


class UpdatePlantsPage extends Component {

    state = {
        plant: {
          name: this.props.store.plantByIdReducer[0].name,
          size: this.props.store.plantByIdReducer[0].size,
          notes: this.props.store.plantByIdReducer[0].notes,
          list: this.props.store.plantByIdReducer[0].list,
          type: this.props.store.plantByIdReducer[0].type,
          sci_name: this.props.store.plantByIdReducer[0].sci_name,
          img_url: this.props.store.plantByIdReducer[0].img_url,
          id: this.props.store.plantByIdReducer[0].id
            }
        }
    

    componentDidMount = () => {

        console.log(this.props.store.plantByIdReducer[0].name);
        console.log(this.state.plant.name);
        this.props.dispatch({
            type: 'FETCH_PLANTS'
        })
        console.log();
    }

    // componentWillUpdate = () => { 

    // }

    updatePlant = () => {

        console.log('update plant payload', this.state)
        this.props.dispatch({
          type: 'UPDATE_PLANT',
          payload: {data: this.state.plant, id: this.state.plant.id} 
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
                <br></br>
                    <label htmlFor="name">
                    Plant Name:
                        <input type="text" defaultValue={this.state.plant.name}
                        onChange={(event) => this.handleInputChangeFor(event, 'name')}/>
                    </label>
            </div>
            <div>
                <label htmlFor="type">
                   <div>
                   Plant Type:
                            <select 
                                name="type"
                                id="type"
                                onChange={(event) => this.handleInputChangeForType(event, 'type.id')}>
                                <option defaultValue='selected'>{this.state.plant.type}</option>
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
                        Plant Size:
                        <select 
                            name="size" 
                            id="size"
                            placeholder="Optional"
                            required

                            onChange={(event) => this.handleInputChangeFor(event, 'size')}
                            >
                            <>
                            <option defaultValue='selected'>{this.state.plant.size}</option>
                            <option value='smol'>smol</option>
                            <option value='mid-size'>mid-size</option>
                            <option value='chonky'>chonky</option>
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
                            {this.state.plant.list === true ?
                            <option defaultValue='selected'>Yes</option>
                            :   
                            <option defaultValue='selected'>No</option>
                            }
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
                        defaultValue={this.state.plant.notes}
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