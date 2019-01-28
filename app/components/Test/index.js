import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'basic-styled-uikit';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Test = ({ onClick }) => (
  <Button onClick={onClick}>Test</Button>
);

Test.propTypes = propTypes;

export default Test;
