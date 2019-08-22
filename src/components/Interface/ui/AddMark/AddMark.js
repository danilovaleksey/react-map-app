import React from 'react';
import PropTypes from "prop-types";

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
      console.log('do validate');
      createNewMark();
    }
  };
  render() {
    const {
      newMarkName,
      setNewMarkName
    } = this.props;
    return (
          <input type="text"
                 onChange={event => setNewMarkName(event.target.value)}
                 onKeyDown={this._handleKeyDown}
                 value={newMarkName}
          />
    )
  }
}

export default AddMark;