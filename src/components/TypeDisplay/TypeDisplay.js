import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class TypeDisplay extends Component {

  componentDidMount = () => {
    this.props.dispatch({
        type: 'FETCH_PLANT_TYPE'
    })
  }
  
    render() {
        return (
        //     <div>
        //     {this.props.store.plantsReducer.map( plant => {
        //       return (
        //       <li key={plant.id}>
        //         <img className="plantImage" src={plant.image_url} alt={plant.type}/>
        //         <ul><li>Name:{plant.name}</li>
        //         <li>Type:{plant.type}</li>
        //         <li>Size:{plant.size}</li>
        //         <li>Notes:{plant.notes}</li>
        //         <li>List?:{plant.list}</li>
        //         <li>Scientific Name:{plant.sci_name}</li>
        //         </ul>

        //         <button id="deleteBtn" onClick={(event) => this.deletePlant(event, plant.id)}>Delete Plant</button>
        //       </li>
        //       );
        //     })}
        //   </div>
          <div>
             {this.props.store.plantTypeReducer.map( plantType => {
               return (
                <ul>
                 <li key={plantType.id}></li>
                 <li>Type:{plantType.type}</li>
                 <li>SciName:{plantType.scientific_name}</li>
                 <li>ImG<img className="plantImage" src={plantType.image_url} alt={plantType.type}/></li>
                 </ul>
             )})}
           </div>
        );
    }
}
export default connect(mapStoreToProps)(TypeDisplay);