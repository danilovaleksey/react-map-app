import React from 'react';
import {YMaps, Map, Placemark, Polyline, GeolocationControl, ZoomControl,} from "react-yandex-maps";


class MapContainer extends React.Component {
  onMapChange = (e) => {
    console.log(e.originalEvent.newCenter);
  };
  onMarkChange = (e) => {
    console.log(e.originalEvent);
  };
  render() {
    return (
        <YMaps
            enterprise
            query={{
              apikey: '66302fc7-75ba-4c4d-b62b-91812d024dd7\n',
            }}
        >
          <Map defaultState={{
                center: [55.751574, 37.573856],
                zoom: 7,
              }}
              width={'70vw'}
              height={'100vh'}
               onBoundsChange={this.onMapChange}
          >
            <GeolocationControl options={{ float: 'left' }} />
            <ZoomControl options={{ float: 'left' }} />

            <Polyline
                geometry={[[55.684758, 37.738521], [57.684758, 39.738521]]}
                options={{
                  balloonCloseButton: false,
                  strokeColor: '#000',
                  strokeWidth: 4,
                  strokeOpacity: 0.5,
                }}
            />

            <Placemark
                onGeometryChange={this.onMarkChange}
                modules={['geoObject.addon.balloon']}
                geometry={[55.684758, 37.738521]}
                properties={{
                  id: 1,
                  hintContent: "Хинт метки",
                  balloonContent: "Балун метки",
                }}
                options={{
                  preset: 'islands#blueCircleDotIconWithCaption',
                  draggable: true,
                }}
            />

            <Placemark
                modules={['geoObject.addon.balloon']}
                geometry={[57.684758, 39.738521]}
                properties={{
                  balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system',
                }}
                options={{
                  preset: 'islands#blueCircleDotIconWithCaption',
                  draggable: true,
                }}
            />
          </Map>
        </YMaps>
    );
  }
}

export default MapContainer;