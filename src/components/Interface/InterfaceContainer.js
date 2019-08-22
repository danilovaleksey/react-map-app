import React from 'react';
import List from "./ui/List/List";
import AddMark from "./ui/AddMark/AddMark";

class InterfaceContainer extends React.Component {
  render() {
    return (
        <div>
          <AddMark />
          <List />
        </div>
    )
  }
}

export default InterfaceContainer;