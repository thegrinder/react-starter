import React from 'react';
import { Button } from 'basic-styled-uikit';
import Spinner from '../Spinner';

const SubmitButton = props => (
  <Button type="submit" renderSpinner={<Spinner color="white" />} {...props} />
);

export default SubmitButton;
