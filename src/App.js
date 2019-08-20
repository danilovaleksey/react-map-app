import React from 'react';
import styles from './App.module.scss';
import MapContainer from "./components/Map/MapContainer";
import ListContainer from "./components/List/ListContainer";

function App() {
  return (
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <ListContainer />
        </div>
        <div className={styles.map}>
          <MapContainer />
        </div>
      </div>
  );
}

export default App;
