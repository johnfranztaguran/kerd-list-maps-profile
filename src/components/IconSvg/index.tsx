import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import PropTypes from 'prop-types';
import svgs from './svgs';

const IconSvg = (props: any) => <SvgIcon {...props} svgs={svgs} />;

IconSvg.defaultProps = {
  defaultViewBox: undefined,
  fillRule: 'evenodd',
  stroke: undefined,
  strokeWidth: undefined,
  style: undefined,
  viewBox: undefined
};

IconSvg.propTypes = {
  defaultViewBox: PropTypes.string,
  fill: PropTypes.string.isRequired,
  fillRule: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ]),
  svgs: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  viewBox: PropTypes.string
};

export default IconSvg;
