import React from 'react';
import styles from './App.module.scss';

import InterfaceContainer from "./components/Interface/InterfaceContainer";
import MapContainer from "./components/Map/MapContainer";


function App() {
  return (
      <div className={styles.wrapper}>
          <InterfaceContainer />
          <MapContainer />
      </div>
  );
}

export default App;
