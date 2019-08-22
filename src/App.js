import React from 'react';
import styles from './App.module.scss';
import MapContainer from "./components/Map/MapContainer";
import InterfaceContainer from "./components/Interface/InterfaceContainer";

function App() {
  return (
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <InterfaceContainer />
        </div>
        <div className={styles.map}>
          <MapContainer />
        </div>
      </div>
  );
}

export default App;
