import React from 'react';
import PropTypes from "prop-types";
import styles from './AddMark.module.scss';

class AddMark extends React.Component {
  static propTypes = {
    newMarkName: PropTypes.string.isRequired,
    setNewMarkName: PropTypes.func,
    createNewMark: PropTypes.func,
  };
  static defaultProps = {
    newMarkName: '',
    setNewMarkName: ()=> {},
    createNewMark: ()=>{},
  };
  _handleKeyDown = (e) => {
    const {
      createNewMark
    } = this.props;
    if (e.key === 'Enter') {
      createNewMark();
    }
  };
  render() {
    const {
      newMarkName,
      setNewMarkName
    } = this.props;
    return (
        <div className={styles.wrapper}>
          <input type="text"
                 onChange={event => setNewMarkName(event.target.value)}
                 onKeyDown={this._handleKeyDown}
                 value={newMarkName}
                 placeholder={'Choose mark name'}
          />
        </div>

    )
  }
}

export default AddMark;