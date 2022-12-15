import React from 'react';
import { render } from '@testing-library/react-native';
import { Text as MockText } from 'react-native';
import Block from '../index';

const createTextProps = (props: any) => ({
  ...props,
});

describe('Component: Block', () => {
  it('Should render a <Block> with a chilren centered', () => {
    const props: any = createTextProps({ center: true, middle: true });
    const { baseElement } = render(
      <Block {...props}>
        <MockText>Test</MockText>
      </Block>,
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Should render a <Block> with no children', () => {
    const props: any = createTextProps({});
    const { baseElement } = render(<Block {...props} />);
    expect(baseElement).toMatchSnapshot();
  });
});
