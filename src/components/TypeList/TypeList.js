import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class TypeList extends Component {

//   componentDidMount = () => {
//     this.props.dispatch({
//         type: 'FETCH_PLANTS'
//     })
//   }


 
    render() {
        return (
            <div>
              <select>
              <option>Got no type?</option>
              {this.props.store.plantTypeReducer.map((plantType) => {
                return (
              <option key={plantType.id}>{plantType.type}</option>
                )
              })}
              </select>
            </div>
        );
    }
}
export default connect(mapStoreToProps)(TypeList);