
This project includes a API server (json-server) for you to use. To install and run, use the commands below:

- `cd dummy-api`
- `npm install`
- `npm run start:api`
Once running, you can use the API endpoints listed in the following section from `http://localhost:3001`.


- `node_modules/react-native/index.js`

- `Form this`
get ColorPropType(): $FlowFixMe {
    invariant(
      false,
      'ColorPropType has been removed from React Native. Migrate to ' +
        "ColorPropType exported from 'deprecated-react-native-prop-types'.",
    );
  },
  get EdgeInsetsPropType(): $FlowFixMe {
    invariant(
      false,
      'EdgeInsetsPropType has been removed from React Native. Migrate to ' +
        "EdgeInsetsPropType exported from 'deprecated-react-native-prop-types'.",
    );
  },
  get PointPropType(): $FlowFixMe {
    invariant(
      false,
      'PointPropType has been removed from React Native. Migrate to ' +
        "PointPropType exported from 'deprecated-react-native-prop-types'.",
    );
  },
  get ViewPropTypes(): $FlowFixMe {
    invariant(
      false,
      'ViewPropTypes has been removed from React Native. Migrate to ' +
        "ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
    );
  },


- `To this`

get ColorPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').ColorPropType;
  },
  get EdgeInsetsPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
  },
  get PointPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').PointPropType;
  },
  get ViewPropTypes(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').ViewPropTypes;
  },


- `npm install or yarn install`
- `cd ios`
- `pod install`
- `yarn ios`
ios 14 above

