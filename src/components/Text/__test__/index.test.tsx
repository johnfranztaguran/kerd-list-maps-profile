import React from 'react';
import { render } from '@testing-library/react-native';
import Text from '../index';

const createTextProps = (props: object) => ({
  ...props,
});

describe('Component: Text', () => {
  it('Should render a <Headline1 />', () => {
    const props: any = createTextProps({ text: 'Test h1', h1: true });
    const { baseElement } = render(<Text {...props} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Should render a <Body />', () => {
    const props: any = createTextProps({ text: 'Test body', body: true });
    const { baseElement } = render(<Text {...props} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Should render a <Subtitle />', () => {
    const props: any = createTextProps({
      text: 'Test subtitle',
      subtitle: true,
    });
    const { baseElement } = render(<Text {...props} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Should render a <Caption />', () => {
    const props: any = createTextProps({
      text: 'Test caption',
      caption: true,
    });
    const { baseElement } = render(<Text {...props} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Should render a <Label />', () => {
    const props: any = createTextProps({
      text: 'Test label',
      label: true,
    });
    const { baseElement } = render(<Text {...props} />);
    expect(baseElement).toMatchSnapshot();
  });
});
