import React from 'react';

import { CalculatorButton } from '../';
import { Container, Row } from './styled';

const CalculatorKeyboard = () => (
  <Container>
    <Row>
      <CalculatorButton value="+" variant="operator"/>
      <CalculatorButton value="-" variant="operator"/>
      <CalculatorButton value="*" variant="operator"/>
      <CalculatorButton value="%" variant="operator"/>
    </Row>
    <Row>
      <CalculatorButton value="7" variant="number"/>
      <CalculatorButton value="8" variant="number"/>
      <CalculatorButton value="9" variant="number"/>
      <CalculatorButton value="c" variant="danger"/>
    </Row>
  </Container>
);

export default CalculatorKeyboard;
