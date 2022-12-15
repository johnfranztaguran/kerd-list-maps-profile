/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput as RNTextInput,
  TextInputProps,
} from 'react-native';
import { TextInput as RNPTextInput } from 'react-native-paper';
import Markdown from 'react-native-markdown-package';
import { testIdProps } from 'utils/testAutomation';
import { isNilOrEmpty } from 'utils/helper';
import { TextInputType, MessageType } from 'enums';
import { colors, strings } from 'constant';
import styles from './styles';

type Props = {
  id: string;
  inputType?:
    | TextInputType.Text
    | TextInputType.Number
    | TextInputType.Decimal
    | TextInputType.Email
    | TextInputType.Password;
  message?: string;
  messageType?: MessageType;
  withDecimal?: boolean;
  label?: string;
  placeholder?: string;
  value?: string;
  maxValue?: number;
  style?: any;
  autoFocus?: boolean;
  maxLength?: number;
  onValueChange: (id: string, value: any) => void;
  inputReference?: React.RefObject<RNTextInput>;
  secureTextEntry?: boolean;
  rightComponent?: JSX.Element;
  onPressInfo?: () => void;
  mode?: 'flat' | 'outlined';
  cursorColor?: string;
  theme?: object;
  infoContainerStyle?: object;
  onBlur?: (args: any) => void;
};

const TextInput = (props: Props): JSX.Element => {
  const {
    id,
    inputType = TextInputType.Text,
    messageType,
    message,
    label,
    style,
    placeholder,
    autoFocus,
    value,
    maxValue,
    maxLength,
    onValueChange,
    inputReference,
    secureTextEntry = false,
    rightComponent,
    onPressInfo,
    mode = 'outlined',
    cursorColor = colors.java,
    theme = {},
    infoContainerStyle = {},
    onBlur,
    ...otherProps
  } = props;

  const onTextChange = (text: string) => {
    onValueChange(id, text);
  };

  const onInputBlur = (args: any) => {
    if (isNilOrEmpty(value)) {
      onValueChange(id, '');
    }
    if (onBlur) {
      onBlur(args);
    }
  };

  const getKeyboardType = () => {
    switch (inputType) {
      case TextInputType.Number:
        return 'number-pad';
      case TextInputType.Decimal:
        return 'decimal-pad';
      default:
        return 'default';
    }
  };

  return (
    <View>
      <>
        <RNPTextInput
          mode={mode}
          autoFocus={autoFocus}
          label={label}
          error={messageType === MessageType.Error && !!message}
          placeholder={placeholder}
          value={value}
          onChangeText={onTextChange}
          keyboardType={getKeyboardType()}
          autoCapitalize="none"
          autoCorrect={false}
          onBlur={onInputBlur}
          ref={inputReference}
          style={[styles.textInput, style]}
          maxLength={maxLength}
          selectionColor={cursorColor}
          secureTextEntry={secureTextEntry}
          theme={theme}
          {...(otherProps as TextInputProps)}
          {...testIdProps(strings.testIdText.prefixInput + label)}
        />
        {rightComponent && (
          <View style={styles.rightContainer}>{rightComponent}</View>
        )}
      </>
      {messageType !== undefined && !!message && (
        <View style={[styles.infoContainer, infoContainerStyle]}>
          <TouchableOpacity
            {...testIdProps(`${strings.testIdText.prefixTxt} HelperText`)}
            activeOpacity={1.0}
            onPress={onPressInfo}>
            <Markdown
              styles={{
                // Markdown styles
                heading1: styles.info,
                view: styles.view,
                strong: styles.highlighted,
                text: styles.text,
              }}>
              {message}
            </Markdown>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TextInput;
