import React from 'react'
import {
  ScrollView,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
  TouchableHighlight,
  Text as RNText
} from 'react-native'
import moment from 'moment'
import { Block, Button, Text, Header, AvatarThumbnail } from 'components'
import { ButtonMode, ButtonType, Screens } from 'enums'
import { images, colors, strings } from 'constant'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MarkerModal from './MarkerModal'
import styles from './styles'

const { width } = Dimensions.get('window');
const DEFAULT_MAP_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };

type Props = {
  navigation: any
  userLocation: any
  mapMarkers: any
  onLayout: () => void
  _onRegionChangeComplete: (value: any) => void
  onLongPressAddMarker: (value: any) => void
  mapViewRef: any
  isVisible: boolean
  setIsVisible: any
  removeMarker: (value: any) => void
  handleMarkerPress: (value: any) => void
  _onRegionChange: () => void
  showModalButton: boolean
}

const { Profile } = images
const date = moment(Date.now()).format('ddd, MMMM DD, YYYY')

const markerIcon = require('../../../assets/icons/marker-location.png');
const selectedMarker = require('../../../assets/icons/selected-marker-location.png');
const excludedMarker = require('../../../assets/icons/excluded-marker-location.png');
const excludedSelectedMarker = require('../../../assets/icons/selected-excluded-marker.png');

const MapsForm = ({
  navigation,
  userLocation,
  mapMarkers,
  _onRegionChangeComplete,
  _onRegionChange,
  onLongPressAddMarker,
  onLayout,
  mapViewRef,
  isVisible,
  setIsVisible,
  removeMarker,
  handleMarkerPress,
  showModalButton
}: Props) => {

  const renderSearchButton = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => setIsVisible(true)}
        style={styles.markerShowButton}>
        <RNText style={styles.markerModalText}>Show Marker List</RNText>
      </TouchableOpacity>
    );
  }
  const renderMarkers = (markers: any) =>
    markers.map((marker: any, index: number) => {
      return (
        <Marker
          key={index}
          coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
          title={marker.title}
        >
          <Image
            source={markerIcon}
            style={{width: 24, height: 24}}
          />
        </Marker>
      );
    })

  return (
    <Block>
      <Header
        title={`${strings.home.welcome} Google Maps`}
        subtitle={`${strings.home.todayIs} ${date}`}
        isBack={false}
        leftComponent={() => (
          <TouchableOpacity onPress={() => {}}>
            <AvatarThumbnail
              size={32}
              photo={Profile}
              hasPhoto
              initialsName="Joanne Bisnar"
              customStyle={styles.avatar}
            />
          </TouchableOpacity>
        )}
      />
      <Block column style={styles.mainContainer}>
        <Block column style={styles.simpleAppContainer}>
        <Text h5 text={strings.googleMap.exploreMaps} style={styles.title} />
          <SafeAreaView style={styles.containerMap}>
            <MapView
              ref={mapViewRef}
              provider={PROVIDER_GOOGLE}
              style={styles.styleMap}
              onLayout={onLayout}
              onRegionChange={_onRegionChange}
              onPress={(value) => console.log('value- press', value.nativeEvent)}
              onRegionChangeComplete={_onRegionChangeComplete}
              onDoublePress={value => console.log('onDoublePress', value)}
              onLongPress={value => {
                onLongPressAddMarker(value)
              }}
            >
              {renderMarkers(mapMarkers)}
            </MapView>
            {mapMarkers.length < 1 ? null : showModalButton ? renderSearchButton() : null}
            <MarkerModal
              visible={isVisible}
              markers={mapMarkers}
              setIsVisible={setIsVisible}
              removeMarker={removeMarker}
              handleMarkerPress={handleMarkerPress}
            />
          </SafeAreaView>
        </Block>
      </Block>
    </Block>
  )
}

export default MapsForm
