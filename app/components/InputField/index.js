import React from 'react';
import PropTypes from 'prop-types';
import { Input, Text } from 'basic-styled-uikit';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  touched: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
};

const defaultProps = {
  error: '',
};


const InputField = ({
  label,
  onChange,
  onBlur,
  value,
  error,
  touched,
  id,
}) => (
  <div className="mb-2">
    <Text as="label" htmlFor={id}>{label}</Text>
    <Input
      id={id}
      onChange={onChange}
      onBlur={onBlur}
      invalid={!!error && touched}
      value={value}
    />
    <div className="h-4">
      {touched && !!error && (
        <Text sizing="s" color="danger" className="truncated">
          {error}
        </Text>
      )}
    </div>
  </div>
);

InputField.propTypes = propTypes;
InputField.defaultProps = defaultProps;

export default InputField;
