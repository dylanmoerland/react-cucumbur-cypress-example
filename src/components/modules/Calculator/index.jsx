import React from 'react';

import { EQUALS } from 'config/constants';

import { CalculatorDisplay, CalculatorKeyboard } from './components';
import { Container } from './styled';

const CalculatorContext = React.createContext();

export const useCalculator = (index = null) => {
  const context = React.useContext(CalculatorContext);

  if (!context) {
    throw new Error(
      'Calculator components should be rendered inside the Calculator component'
    );
  }

  return context;
};

const calculateSum = (sum) => {
  return 42;
};

const Calculator = () => {
  const [displayValue, setDisplayValue] = React.useState();
  const [sum, setSum] = React.useState([]);

  const appendToSum = React.useMemo(() => (input) => {
    if (typeof input !== 'number') {
      if (input === EQUALS) {
        const value = calculateSum(sum);

        setDisplayValue(value);
        setSum([value]);
      } else {
        setSum([...sum, input]);
      }
    } else {
      setDisplayValue(displayValue + input);
      sum[sum.length - 1] = sum[sum.length - 1] + input;
      setSum(sum);
    }
  }, [displayValue, sum]);

  const value = React.useMemo(() => ({
    displayValue,
    appendToSum,
  }), [displayValue, appendToSum]);

  return (
    <CalculatorContext.Provider value={value}>
      <Container>
        <CalculatorDisplay />
        <CalculatorKeyboard />
      </Container>
    </CalculatorContext.Provider>
  );
};

export default Calculator;
