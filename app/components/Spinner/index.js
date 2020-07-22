import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { getColor, rem } from 'basic-styled-uikit';

import messages from './messages';

const propTypes = {
  sizing: PropTypes.number,
  color: PropTypes.string.isRequired,
};

const defaultProps = {
  sizing: 20,
};

const loading = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.span.attrs(({ intl }) => ({
  'aria-label': intl.formatMessage(messages.spinner),
}))`
  width: ${(props) => rem(props.sizing)(props)};
  height: ${(props) => rem(props.sizing)(props)};
  border-radius: 100%;
  border: 2px solid ${(props) => getColor(props.color)(props)};
  border-bottom-color: transparent;
  animation: ${loading} 0.75s 0s infinite linear;
  vertical-align: middle;
  display: inline-block;
`;

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default injectIntl(Spinner);
