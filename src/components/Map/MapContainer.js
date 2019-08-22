import React from 'react';
import {YMaps, Map, Placemark, Polyline, GeolocationControl, ZoomControl,} from "react-yandex-maps";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {mapApiKey} from "../../api/api";
import {
  setMapCenter
} from "../../store/actions/map";


class MapContainer extends React.Component {
  static propTypes = {
    polylineGeometry: PropTypes.array,
  };
  static defaultProps = {
    polylineGeometry: [],
  };
  onMarkChange = (e) => {
    console.log(e.originalEvent);
  };
  render() {
    const {
      markers,
      polylineGeometry,
        setMapCenter
    } = this.props;
    return (
        <YMaps
            enterprise
            query={{
              apikey: mapApiKey,
            }}
        >
          <Map defaultState={{
                center: [55.751574, 37.573856],
                zoom: 7,
              }}
              width={'70vw'}
              height={'100vh'}
               onBoundsChange={(e) => setMapCenter(e)}
          >
            <GeolocationControl options={{ float: 'left' }} />
            <ZoomControl options={{ float: 'left' }} />

            <Polyline
                geometry={polylineGeometry}
                options={{
                  strokeColor: '#000',
                  strokeWidth: 4,
                  strokeOpacity: 0.5,
                }}
            />
            {
              markers.map((marker, index) => (
                <Placemark
                    key={index}
                    onGeometryChange={this.onMarkChange}
                    modules={['geoObject.addon.balloon']}
                    geometry={marker.geometry}
                    properties={{
                    id: index,
                    balloonContent: marker.markerName,
                  }}
                    options={{
                    preset: 'islands#blueCircleDotIconWithCaption',
                    draggable: true,
                }}
              />
              ))
            }
          </Map>
        </YMaps>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    markers: state.MapState.markers,
    polylineGeometry: state.MapState.polylineGeometry,
  }
};
export default connect(mapStateToProps, {
  setMapCenter
}) (MapContainer);