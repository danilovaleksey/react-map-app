import React from 'react';
import PropTypes from "prop-types";
import styles from './List.module.scss';

class List extends React.Component {
  static propTypes = {
    markers: PropTypes.array,
    deleteMark: PropTypes.func,
  };
  static defaultProps = {
    markers: [],
    deleteMark: ()=> {},
  };
  render() {
    const {
      markers,
      deleteMark,
    } = this.props;
    return (
        <div className={styles.list}>
        {
          markers.map((marker, index) => (
              <div key={index} className={styles.listItem}>
                <p>{marker.markerName}</p>
                <button onClick={() => deleteMark(index)}>Delete</button>
              </div>
          ))
        }
        </div>
    )
  }
}

export default List;