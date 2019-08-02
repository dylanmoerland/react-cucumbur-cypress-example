import React from 'react';
import PT from 'prop-types';

import { Container, Button, Label } from './styled';

const CalculatorButton = ({ value, variant }) => {
  return (

    <button>{value}</button>
  );
};

CalculatorButton.propTypes = {
  variant: PT.oneOf(['number', 'operator', 'danger', 'success']).isRequired,
  value: PT.string.isRequired,
};

export default CalculatorButton;
