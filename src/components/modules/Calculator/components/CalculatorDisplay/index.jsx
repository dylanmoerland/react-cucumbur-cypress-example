import React from 'react';

import { useCalculator } from 'modules/Calculator';

import { Container, Wrapper, Label } from './styled';

const CalculatorDisplay = () => {
  const { displayValue } = useCalculator();

  return (
    <Container>
      <Wrapper>
        <Label>{displayValue}</Label>
      </Wrapper>
    </Container>
  );
};

export default CalculatorDisplay;
