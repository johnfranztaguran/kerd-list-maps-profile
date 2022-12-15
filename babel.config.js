module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset'
    ],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            'test/*': ['./test/'],
            '@enums': './src/enums',
            '@types': './src/types',
            '@redux': './src/redux',
            '@utils': './src/utils',
            '@lib': './src/lib',
            '@api': './src/api',
            '@constant': './src/constant',
            '@components': './src/components'
          }
        }
      ],
      'transform-inline-environment-variables'
    ],
  };
};
