import React from 'react';
import {YMaps, Map, Placemark, Polyline, ZoomControl,} from "react-yandex-maps";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {mapApiKey} from "../../api/api";
import {
  changeMarkPosition,
  setMapCenter
} from "../../store/actions/mapActions";


class MapContainer extends React.Component {
  static propTypes = {
    markers: PropTypes.array,
    polylineGeometry: PropTypes.array,
    changeMarkPosition: PropTypes.func,
    setMapCenter: PropTypes.func,
  };
  static defaultProps = {
    markers: [],
    polylineGeometry: [],
    changeMarkPosition: ()=>{},
    setMapCenter: ()=>{},
  };
  render() {
    const {
      markers,
      polylineGeometry,
      changeMarkPosition,
      setMapCenter,
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
                    onGeometryChange={(e) => changeMarkPosition(e.originalEvent.target.geometry._coordinates, index)}
                    modules={['geoObject.addon.balloon']}
                    geometry={marker.geometry}
                    properties={{
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
  setMapCenter,
  changeMarkPosition
}) (MapContainer);