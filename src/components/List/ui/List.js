import React from 'react';
import styles from './List.module.scss';

class List extends React.Component {
  render() {
    return (
        <div>
          <input type="text"/>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
    )
  }
}

export default List;