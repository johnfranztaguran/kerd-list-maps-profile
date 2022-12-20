import React, { useEffect, useState, useRef, useMemo } from 'react'
import Geocoder from 'react-native-geocoding';
import {
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { AppState } from 'redux/reducers'
import { useSelector, useDispatch } from 'react-redux'
import { getUserCurrentLocation } from '@redux/actions/commonActions'
import MapView from 'react-native-maps';
import MapsForm from './MapsForm';

const DEFAULT_MAP_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };

type StateProps = {
  latitude: number,
  longitude: number,
  markerId: string,
  title: string,
}

const MapsScreen = () => {
  const dispatch: any = useDispatch();
  const navigation = useNavigation()
  const mapViewRef = useRef<MapView>(null);
  const userLocation: any = useSelector<AppState>(
    state => state.common.userLocation,
  );

  const setInitialMarkerCoord = () => {
    let newMapMarker: Array<StateProps> = [];
    const setObj = {
      latitude: userLocation?.latitude,
      longitude: userLocation?.longitude,
      markerId: userLocation?.markerId,
      title: userLocation?.title,
    }
    newMapMarker.push(setObj)
    return newMapMarker
  }

  const [mapMarkers, setMapMarkers] = useState<Array<StateProps>>(setInitialMarkerCoord())
  const [mapIsLoaded, setMapIsLoaded] = useState(false)
  const [translateY, setTranslateY] = useState(new Animated.Value(154))
  const [isVisible, setIsVisible] = useState(false)
  const [nextRegionChangeWillShowModalButton, setNextRegionChangeWillShowModalButton] = useState(false)
  const [showModalButton, setShowModalButton] = useState(true)
  const [activeMarker, setActiveMarker] = useState(userLocation?.markerId)
  const [coordinatesCenterArea, setCoordinatesCenterArea] = useState({
    lat: null,
    lng: null
  })


  const _onRegionChange = () => {
    if (nextRegionChangeWillShowModalButton) {
      setNextRegionChangeWillShowModalButton(false)
      setShowModalButton(false)
    }
  };

  const _onRegionChangeComplete = (region: any) => {
    if (!nextRegionChangeWillShowModalButton) {
      setNextRegionChangeWillShowModalButton(true)
      setShowModalButton(true)
    }
    setCoordinatesCenterArea({
      lat: region.latitude,
      lng: region.longitude
    })
  };

  const fitAllMarkers = ({ animated }: any) => {
    const distanceDelta = Math.exp(Math.log(360) - 11 * Math.LN2);
    if (mapMarkers && mapMarkers.length === 0) {
      const defaultRegion = {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: distanceDelta,
        longitudeDelta: distanceDelta
      };

      if (mapViewRef) {
        mapViewRef.current?.animateToRegion(defaultRegion, 500);
      }
      return;
    }

    if (animated && mapMarkers.length === 1) {
      const newRegion = {
        latitude: mapMarkers[0].latitude,
        longitude: mapMarkers[0].longitude,
        latitudeDelta: distanceDelta,
        longitudeDelta: distanceDelta
      };

      if (mapViewRef) {
        mapViewRef.current?.animateToRegion(newRegion, 500);
      }
    } else if (mapViewRef) {
      mapViewRef.current?.fitToCoordinates(mapMarkers, {
        edgePadding: DEFAULT_MAP_PADDING,
        animated
      });
    }
  };

  const onLayout = () => {
    setMapIsLoaded(true)
  };

  useEffect(() => {
    fitAllMarkers({ animated: true });
  }, [mapIsLoaded])

  useEffect(() => {
    if (userLocation === null) {
      dispatch(getUserCurrentLocation())
    }
  }, [userLocation])

  const handleMarkerPress = (item: any) => {
    const distanceDelta = Math.exp(Math.log(360) - 11 * Math.LN2);
    setIsVisible(false)
    setActiveMarker(item.markerId)
    const newRegion = {
      latitude: item.latitude,
      longitude: item.longitude,
      latitudeDelta: distanceDelta,
      longitudeDelta: distanceDelta
    };
    mapViewRef.current?.animateToRegion(newRegion, 500);
  };

  const onLongPressAddMarker = (value: any) => {
    const coord = value.nativeEvent.coordinate
    Geocoder.from(coord)
      .then(response => {
        const { results } = response;
        if (results.length > 0) {
          let newMapMarkers = [...mapMarkers];
          for (let i = results.length - 1; i >= 0; i -= 1) {
            const { types } = results[i];
            const hasMarkerType = types.some(
              (type) => type === 'premise' || type === 'street_address'
            );
            if (hasMarkerType) {
              const setObj = {
                latitude: results[i].geometry.location.lat,
                longitude: results[i].geometry.location.lng,
                markerId: results[i].place_id,
                title: results[i].formatted_address,
              }
              setActiveMarker(results[i].place_id)
              newMapMarkers.push(setObj)
              break;
            }
          }
          setMapMarkers(newMapMarkers)
        }
      })
      .catch(err => {
        console.error('Error: ', err)
      })
  }

  const removeMarker = (item: any) => {
    const newMarker = mapMarkers.filter(marker => marker.markerId !== item.markerId)
    setMapMarkers(newMarker)
    if (newMarker.length === 0) {
      setIsVisible(false)
    }
  }

	return (
    <MapsForm
      navigation={navigation}
      userLocation={userLocation}
      mapMarkers={mapMarkers}
      _onRegionChangeComplete={_onRegionChangeComplete}
      _onRegionChange={_onRegionChange}
      onLongPressAddMarker={onLongPressAddMarker}
      onLayout={onLayout}
      mapViewRef={mapViewRef}
      setIsVisible={setIsVisible}
      isVisible={isVisible}
      removeMarker={removeMarker}
      handleMarkerPress={handleMarkerPress}
      showModalButton={showModalButton}
    />
  )
}

export default MapsScreen;
