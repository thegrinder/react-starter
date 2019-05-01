import styled from 'styled-components';
import { getColor, rem } from 'basic-styled-uikit';

const Card = styled.div`
  background: ${getColor('white')};
  border-radius: ${rem(6)};
  box-shadow: 0 1px 3px 0 ${getColor('gray300')},
    0 0 0 1px ${getColor('gray300')};
`;

export default Card;
