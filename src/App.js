import React from 'react';
import styles from './App.module.scss';

import InterfaceContainer from "./components/Interface/InterfaceContainer";
import MapContainer from "./components/Map/MapContainer";


function App() {
  return (
      <div className={styles.wrapper} data-test='appComponent'>
          <InterfaceContainer data-test='InterfaceContainer'/>
          <MapContainer data-test='MapContainer' />
      </div>
  );
}

export default App;
