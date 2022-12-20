import React, { useState, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Platform,
} from 'react-native';
import { colors } from 'constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 17, 51, 0.7)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: 'white',
    height: '60%',
    width: '90%',
    opacity: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40
  },
  text: {
    fontFamily: 'OpenSans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16
  },
  textInput: {
    borderColor: '#C4C4C4',
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 12
  },
  formWrapper: {
    width: '100%',
    marginVertical: 20,
    position: 'relative',
    zIndex: 2
  },
  button: {
    borderRadius: 4,
    backgroundColor: colors.java,
    justifyContent: 'center',
    paddingTop: 3
  },
  buttonText: {
    fontFamily: 'OpenSans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#fff'
  },
  error: {
    fontFamily: 'OpenSans',
    fontStyle: 'italic',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#f00',
    marginTop: 5
  },
  close: {
    position: 'absolute',
    top: 15,
    right: 15,
    height: 26,
    width: 26,
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeItem: {
    height: 44,
    width: '100%',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 5
  },
  placeName: {
    color: colors.java,
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'OpenSans'
  },
  androidItemsWrapper: {
    width: '100%',
    marginBottom: 0,
    position: 'relative'
  },
  iosItemsWrapper: {
    width: '100%',
    marginBottom: 0,
    bottom: 0,
  }
});

const MarkerModal = ({ visible, markers, setIsVisible, removeMarker, handleMarkerPress }: any) => {

  const renderPrediction = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={() => handleMarkerPress(item)}>
        <View style={styles.placeItem}>
          <TouchableOpacity onPress={() => removeMarker(item)}>
            <Text style={{ color: colors.cinnabar, marginHorizontal: 10 }}>
              x
            </Text>
          </TouchableOpacity>
          <Text numberOfLines={1} style={styles.placeName}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.close} onPress={() => setIsVisible(false)}>
            <Text>
              x
            </Text>
          </TouchableOpacity>
          <View style={styles.formWrapper}>
            <View
              style={styles.iosItemsWrapper}>
              <FlatList
                data={markers}
                keyExtractor={(item) => item.markerId}
                renderItem={renderPrediction}
                style={{ backgroundColor: '#ffffff' }}
                keyboardShouldPersistTaps="always"
                keyboardDismissMode="on-drag"
                bounces={false}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MarkerModal
