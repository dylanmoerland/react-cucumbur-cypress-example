import React from 'react';

import constants from 'config/constants';

import { CalculatorButton } from '../';
import { Container, Row } from './styled';

const CalculatorKeyboard = () => {

  return (
    <Container>
      <Row>
        <CalculatorButton value={constants.PLUS} variant="operator"/>
        <CalculatorButton value={constants.MINUS} variant="operator"/>
        <CalculatorButton value={constants.TIMES} variant="operator"/>
        <CalculatorButton value={constants.DIVIDE} variant="operator"/>
      </Row>
      <Row>
        <CalculatorButton value="7" variant="number"/>
        <CalculatorButton value="8" variant="number"/>
        <CalculatorButton value="9" variant="number"/>
        <CalculatorButton value={constants.DECIMAL} variant="operator"/>
      </Row>
      <Row>
        <CalculatorButton value="4" variant="number"/>
        <CalculatorButton value="5" variant="number"/>
        <CalculatorButton value="6" variant="number"/>
        <CalculatorButton value={constants.CLEAR} variant="danger"/>
      </Row>
      <Row>
        <CalculatorButton value="1" variant="number"/>
        <CalculatorButton value="2" variant="number"/>
        <CalculatorButton value="3" variant="number"/>
        <CalculatorButton value={constants.EQUALS} variant="success"/>
      </Row>
    </Container>
  );
};

export default CalculatorKeyboard;
