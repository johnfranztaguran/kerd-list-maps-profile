import { action } from 'typesafe-actions'
import { COMMON } from './actionTypes'
import { Platform } from 'react-native';
import axios from 'axios';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import { NetworkInfo } from "react-native-network-info";

export const setCommonLoading = (payload: boolean) =>
  action(COMMON.SET_LOADING, payload)

export const setCommonErrorMsg = (payload: string) =>
  action(COMMON.SET_ERROR, payload)

export const setLocationPermission = (payload: any) => ({
  type: COMMON.SET_LOCATION_PERMISSION,
  payload
});

const getIpAddress = () => {
  NetworkInfo.getIPAddress().then(ipAddress => {
    console.log(ipAddress);
  });
}

function getLocationByIp() {
  return new Promise((resolve, reject) => {
    getIpAddress()
    axios
      // .get(`https://api.ipstack.com/check?access_key=9bf63ff6b3d7bf5026d8aee84017d0ab`)
      .get(`https://api.ipstack.com/49.147.197.144?access_key=9bf63ff6b3d7bf5026d8aee84017d0ab`)
      .then((response: any) => {
        console.log('response', response)
        const {
          data: { latitude, longitude }
        } = response;
        resolve({
          lat: latitude,
          lng: longitude
        });
      })
      .catch((error: any) => {
        reject(error);
      });
  });
}


function getLocationViaNavigator() {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (location) => {
        console.log('Geolocation - location', location)
        const {
          coords: { latitude, longitude }
        } = location;
        resolve({
          lat: latitude,
          lng: longitude
        });
      },
      (error) => {
        reject(error);
      },
      Platform.select({
        ios: {
          enableHighAccuracy: true,
          timeout: 10000,
          // maximumAge: 10000
        },
        // android: {
        //   enableHighAccuracy: false,
        //   timeout: 5000
        // }
      })
    );
  });
}

export function getCurrentLocation() {
  if (Platform.OS === 'ios') {
    return getLocationViaNavigator()
      .then((currentLocation) => {
        return currentLocation
      })
    // return getLocationByIp()
    //   .then((currentLocation) => {
    //     return currentLocation
    //   })
      .catch(() => getLocationByIp());
  }
}

function useCurrentLocation() {
  return { type: 'USE_CURRENT_LOCATION' };
}

export const setCurrentUserLocation = (payload: any) => ({
  type: COMMON.USE_CURRENT_LOCATION,
  payload
});

  export const updateLocationNameByCoord = (coord: any) => {
    return async (dispatch: any) => {
      try {
        const response = await Geocoder.from(coord)
        const { results } = response;
        if (results.length > 0) {
          for (let i = results.length - 1; i >= 0; i -= 1) {
            const { types } = results[i];
            const wasAdministrativeAreaLevel2 = types.some(
              (type) => type === 'administrative_area_level_2'
            );
            if (wasAdministrativeAreaLevel2) {
              const setObj = {
                latitude: results[i].geometry.location.lat,
                longitude: results[i].geometry.location.lng,
                markerId: results[i].place_id,
                title: results[i].formatted_address,
              }
              dispatch(setCurrentUserLocation(setObj));
              break;
            }
          }
        }
      } catch (err) {
        console.error('Error: ', err);
      }
    };
  };

export const getUserCurrentLocation = () => {
  return async (dispatch: any) => {
    try {
      const userLocation: any = await getCurrentLocation();
      const location = {
        latitude: userLocation.lat,
        longitude: userLocation.lng
      };
      if (userLocation) {
        // dispatch(setCurrentUserLocation(location));
        dispatch(updateLocationNameByCoord(location))
      }
    } catch (err) {
      console.error('Error: ', err);
    }
  };
};

