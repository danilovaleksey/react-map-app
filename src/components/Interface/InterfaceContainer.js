import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import AddMark from "./ui/AddMark/AddMark";
import List from "./ui/List/List";
import {
  createNewMark,
  deleteMark,
  setNewMarkName,
  updateMarkers,
} from "../../store/actions/map";


class InterfaceContainer extends React.Component {
  static propTypes = {
    markers: PropTypes.array,
    newMarkName: PropTypes.string,
    setNewMarkName: PropTypes.func,
    createNewMark: PropTypes.func,
    deleteMark: PropTypes.func,
    updateMarkers: PropTypes.func,
  };
  static defaultProps = {
    markers: [],
    newMarkName: '',
    setNewMarkName: ()=> {},
    createNewMark: ()=>{},
    deleteMark: ()=>{},
    updateMarkers: ()=>{},
  };
  render() {
    const {
      markers,
      newMarkName,
      setNewMarkName,
      createNewMark,
      deleteMark,
      updateMarkers,
    } = this.props;
    return (
        <div>
          <AddMark setNewMarkName={setNewMarkName} createNewMark={createNewMark} newMarkName={newMarkName}/>
          <List markers={markers} deleteMark={deleteMark} updateMarkers={updateMarkers} />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    markers: state.MapState.markers,
    newMarkName: state.MapState.newMarkName,
  }
};

export default connect(mapStateToProps, {
  setNewMarkName,
  createNewMark,
  deleteMark,
  updateMarkers,
}) (InterfaceContainer);