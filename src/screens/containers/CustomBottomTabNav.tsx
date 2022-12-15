import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet
} from 'react-native';
import { CommonActions } from '@react-navigation/native'
import { IconSvg } from 'components'
import { themes, colors } from 'constant'

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#fff'
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .3)',
    flexDirection: 'row',
    height: 75
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff'
  },
  label: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'OpenSans'
  },
  icon: {
    marginTop: 20
  }
});

class CustomTabBar extends Component {
  secondTabIsMounted = false;

  handleTabPress = (routeName: any, index: any, routeKey: any) => () => {
    const { navigation } = this.props;
    if (index === 0) {
      navigation.dispatch(() => {
        return CommonActions.reset({
          routes: [
            {
              name: 'ListForm',
              params: {}
            }
          ],
          index: 0
        });
      });
    } else if (index === 1) {
      navigation.navigate({ key: routeKey, routeName });
    } else if (index === 2) {
      navigation.navigate({ key: routeKey, routeName });
    } else {
      navigation.navigate({ key: routeKey, routeName });
    }
  };

  render() {
    const { state } = this.props;
    const { routes, index } = state;

    const icons = ['home', 'explore', 'gear'];

    const titles = [
      'List',
      'Maps',
      'Setting/Profile'
    ];

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.tabBar}>
          {routes.map((route: any, idx: number) => {
            const color =
              index === idx ? themes.colors.primary : colors.tundora;

            return (
              <TouchableWithoutFeedback
                onPress={this.handleTabPress(route.routeName, idx, route.key)}
                key={route.key}>
                <View style={styles.tab}>
                  <IconSvg
                    width={22}
                    height={22}
                    fill={color}
                    stroke={icons[idx] === 'tabbar-passes' ? color : 'none'}
                    name={icons[idx]}
                    style={styles.icon}
                  />

                  <Text style={[styles.label, { color }]}>{titles[idx]}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}

export default CustomTabBar;
