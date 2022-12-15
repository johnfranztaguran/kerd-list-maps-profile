/// <reference types="nativewind/types" />
import React from 'react';
import './config/firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import { StyleSheet } from 'react-native';
import { navigationRef } from 'lib/navigation'
import { themes, fonts } from 'constant'
import CommonProvider from './src/provider'
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/store'
import RootNavigator from './src/routes/RootNavigator'

const theme = {
  ...DefaultTheme,
  fonts: {
    regular: {
      fontFamily: fonts.OpenSansRegular
    },
    medium: {
      fontFamily: fonts.OpenSansRegular
    },
    light: {
      fontFamily: fonts.OpenSansLight
    },
    thin: {
      fontFamily: fonts.OpenSansLight
    }
  },
  colors: {
    ...DefaultTheme.colors,
    primary: themes.colors.primary,
    secondary: themes.colors.secondary
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <CommonProvider>
            <SafeAreaProvider>
              <NavigationContainer ref={navigationRef}>
                <RootNavigator />
              </NavigationContainer>
            </SafeAreaProvider>
          </CommonProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
