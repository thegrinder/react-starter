import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { getColor } from 'basic-styled-uikit';
import { rem } from '../../helpers/utils';

const increase = keyframes`
  from { left: -15%; width: 5%; }
  to { left: 130%; width: 100%; }
`;

const decrease = keyframes`
  from { left: -80%; width: 80%; }
  to { left: 110%; width: 10%; }
`;

const propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

const defaultProps = {
  color: 'primary100',
  bgColor: 'primary500',
};

const InfiniteProgressBar = styled.div`
  position: relative;
  height: ${rem(5)};
  overflow-x: hidden;
  background: ${({ theme, bgColor }) => getColor(bgColor)({ theme })};
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: ${({ theme, color }) => getColor(color)({ theme })};
    height: ${rem(5)};
    width: 10%;
    left: -15%;
  }
  &:after {
    animation: ${increase} 2s infinite;
  }
  &:before {
    animation: ${decrease} 2s 0.5s infinite;
  }
`;

InfiniteProgressBar.propTypes = propTypes;
InfiniteProgressBar.defaultProps = defaultProps;

export default InfiniteProgressBar;
