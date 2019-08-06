import React from 'react';

import { useCalculator } from 'modules/Calculator';

import { Container, Wrapper, Label } from './styled';

const CalculatorDisplay = () => {
  const { displayValue } = useCalculator();

  return (
    <Container>
      <Wrapper>
        <Label data-cy="calculator-display-label">
          {displayValue}
        </Label>
      </Wrapper>
    </Container>
  );
};

export default CalculatorDisplay;
