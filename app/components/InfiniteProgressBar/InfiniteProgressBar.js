import styled, { keyframes } from 'styled-components';

const increase = keyframes`
  from { left: -15%; width: 5%; }
  to { left: 130%; width: 100%; }
`;

const decrease = keyframes`
  from { left: -80%; width: 80%; }
  to { left: 110%; width: 10%; }
`;

export const InfiniteProgressBar = styled.div`
  position: relative;
  height: 5px;
  overflow-x: hidden;
  background: #2196f3;
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: #e3f2fd;
    height: 5px;
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
