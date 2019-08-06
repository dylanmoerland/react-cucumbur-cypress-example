import React from 'react';

import constants from 'config/constants';

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
  return eval(sum.join('')); // eslint-disable-line no-eval
};

const Calculator = () => {
  const [displayValue, setDisplayValue] = React.useState('');
  const [sum, setSum] = React.useState([]);

  const appendToSum = React.useMemo(() => (input) => {
    if (!parseInt(input, 10) && input !== constants.DECIMAL) {
      if (input === constants.EQUALS) {
        const value = calculateSum(sum);

        setDisplayValue(value);
        setSum([value]);
      } else if (input === constants.CLEAR) {
        setDisplayValue('');
        setSum([]);
      } else {
        setSum([...sum, input]);
        setDisplayValue('');
      }
    } else {
      if (input === constants.DECIMAL && displayValue.includes(constants.DECIMAL)) {
        return;
      }
      const newSum = [...sum];
      const index = newSum.length ? newSum.length - 1 : 0;

      setDisplayValue(`${displayValue.length ? displayValue : ''}${input}`);
      newSum[index] = newSum[index] ? newSum[index] + input : input;
      setSum(newSum);
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
