import React from 'react';
import PropTypes from "prop-types";

class List extends React.Component {
  static propTypes = {
    markers: PropTypes.array,
  };
  static defaultProps = {
    markers: [],
  };
  render() {
    const {markers} = this.props;
    return (
          <ul>
            {markers.map((marker, index) => <li key={index}>{marker.markerName}</li>)}
          </ul>
    )
  }
}

export default List;