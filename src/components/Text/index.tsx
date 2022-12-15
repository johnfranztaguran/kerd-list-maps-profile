import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TextStyle, TextProps } from 'react-native';
import { Text } from 'react-native-paper';
import { isNil } from 'ramda';
import { testIdProps } from 'utils/testAutomation';
import { strings } from 'constant';
import styles from './styles';

type Props = {
  text: string;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  body?: boolean;
  subtitle?: boolean;
  caption?: boolean;
  label?: boolean;
  size?: number;
  transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  align?: 'auto' | 'center' | 'right' | 'left' | 'justify';
  regular?: boolean;
  bold?: boolean;
  semibold?: boolean;
  medium?: boolean;
  light?: boolean;
  weight?: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' // prettier-ignore
  center?: boolean;
  right?: boolean;
  spacing?: number;
  height?: number;
  color?: string;
  primary?: boolean;
  secondary?: boolean;
  gray1?: boolean;
  gray2?: boolean;
  black?: boolean;
  white?: boolean;
  style?: TextStyle | TextStyle[];
  decoration?: 'none' | 'line-through' | 'underline' | 'underline line-through';
};

const Typography = (props: Props & TextProps): JSX.Element => {
  const {
    text,
    h1,
    h2,
    h3,
    h4,
    h5,
    body,
    subtitle,
    caption,
    label,
    size,
    transform,
    align,
    // styling
    regular,
    bold,
    semibold,
    medium,
    light,
    weight,
    center,
    right,
    spacing, // letter-spacing
    height, // line-height
    // colors
    color,
    primary,
    secondary,
    gray1,
    gray2,
    black,
    white,
    style,
    decoration,
    ...otherProps
  } = props;

  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    h4 && styles.h4,
    h5 && styles.h5,
    body && styles.body,
    subtitle && styles.subtitle,
    caption && styles.caption,
    label && styles.label,
    !isNil(size) && { fontSize: size },
    transform && { textTransform: transform },
    align && { textAlign: align },
    !isNil(height) && { lineHeight: height },
    !isNil(spacing) && { letterSpacing: spacing },
    weight && { fontWeight: weight },
    regular && styles.regular,
    bold && styles.bold,
    semibold && styles.semibold,
    medium && styles.medium,
    light && styles.light,
    center && styles.center,
    right && styles.right,
    !isNil(color) && { color },
    // color shortcuts
    primary && styles.primary,
    secondary && styles.secondary,
    gray1 && styles.gray1,
    gray2 && styles.gray2,
    black && styles.black,
    white && styles.white,
    !isNil(decoration) && { textDecorationLine: decoration },
    style, // rewrite predefined styles
  ];

  return (
    <Text
      style={textStyles}
      {...(otherProps as TextProps)}
      {...testIdProps(strings.testIdText.prefixTxt + text)}>
      {text}
    </Text>
  );
};

export default Typography;
