import React from 'react';
import PT from 'prop-types';

import { useCalculator } from 'modules/Calculator';

import { Button, Label } from './styled';

const CalculatorButton = ({ value, variant }) => {
  const { appendToSum } = useCalculator();

  return (

    <Button
      onClick={() => appendToSum(value)}
      variant={variant}
      data-cy={`calculator-button-${value}`}
    >
      <Label>
        {value.toString()}
      </Label>
    </Button>
  );
};

CalculatorButton.propTypes = {
  variant: PT.oneOf(['number', 'operator', 'danger', 'success']).isRequired,
  value: PT.string.isRequired,
};

export default CalculatorButton;
