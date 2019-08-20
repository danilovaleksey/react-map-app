import React from 'react';
import {Map, YMaps} from "react-yandex-maps";

class MapContainer extends React.Component {
  render() {
    return (
        <YMaps>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}
               width={'70vw'}
               height={'100vh'}
          />
        </YMaps>
    )
  }
}

export default MapContainer;