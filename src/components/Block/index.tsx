import React from 'react';
import { View, Animated, ViewStyle, ViewProps } from 'react-native';
import { isNil } from 'ramda';
import styles from './styles';

type Props = {
  flex?: number | boolean;
  row?: boolean;
  column?: boolean;
  center?: boolean;
  middle?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  card?: boolean;
  shadow?: boolean;
  color?: string;
  primary?: boolean;
  secondary?: boolean;
  gray1?: boolean;
  gray2?: boolean;
  black?: boolean;
  white?: boolean;
  space?:
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-end'
    | 'flex-start';
  padding?: number | Array<number>;
  margin?: number | Array<number>;
  animated?: boolean;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  children?: React.ReactNode;
  style?: ViewStyle | any[];
};

const Block = (props: Props & ViewProps): JSX.Element => {
  const {
    flex,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    card,
    shadow,
    color,
    primary,
    secondary,
    gray1,
    gray2,
    black,
    white,
    space,
    padding,
    margin,
    animated,
    wrap,
    style,
    children,
    ...otherProps
  } = props;

  const handleMargins = (): object => {
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin,
      };
    }

    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0],
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1],
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1],
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3],
          };
      }
    }

    return {};
  };

  const handlePaddings = (): object => {
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding,
      };
    }

    if (typeof padding === 'object') {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0],
          };
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1],
          };
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1],
          };
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3],
          };
      }
    }

    return {};
  };

  const handleFlex = (): object => {
    if (flex) {
      return { flex };
    }
    return {};
  };

  const blockStyles = [
    styles.block,
    handleFlex(),
    flex === false && { flex: 0 }, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    !isNil(margin) && { ...handleMargins() },
    !isNil(padding) && { ...handlePaddings() },
    card && styles.card,
    shadow && styles.shadow,
    space && { justifyContent: space },
    wrap && { flexWrap: wrap },
    !isNil(color) && { backgroundColor: color }, // custom backgroundColor
    // predefined styles colors for backgroundColor
    primary && styles.primary,
    secondary && styles.secondary,
    gray1 && styles.gray1,
    gray2 && styles.gray2,
    black && styles.black,
    white && styles.white,
    style, // rewrite predefined styles
  ];

  if (animated && children) {
    return <Animated.View style={blockStyles}>{children}</Animated.View>;
  }

  return children ? (
    <View style={blockStyles} {...(otherProps as ViewProps)}>
      {children}
    </View>
  ) : (
    <View style={blockStyles} {...(otherProps as ViewProps)} />
  );
};

export default Block;
