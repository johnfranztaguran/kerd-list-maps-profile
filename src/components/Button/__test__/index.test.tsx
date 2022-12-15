import React from 'react';
import { render } from '@testing-library/react-native';
import { ButtonMode, ButtonType } from 'enums';
import Button from '../index';

describe('Component: Button', () => {
  it('Should render a default Button', () => {
    const { baseElement } = render(
      <Button
        mode={ButtonMode.Contained}
        type={ButtonType.PlainButton}
        text="Test Button"
        onPress={() => {}}
      />,
    );
    expect(baseElement).toMatchSnapshot();
  });
});
