import { useState } from 'react';
import styles from './App.module.css';
import { buttonsData } from './data/calcData.js';
import { evaluate } from 'mathjs';

const operators = ['-', '+'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [isResult, setIsResult] = useState(false);
  const output = `${operand1} ${operator} ${operand2}`;

  const handleNumberClick = (value) => {
    if (!operator) {
      setOperand1(operand1 + value);
    } else {
      setOperand2(operand2 + value);
    }
  };
  const handleOperatorClick = (value) => {
    if (!operand1) {
      setOperand1('0');
    }
    if (operand1 && operand2 && operator) {
      const result = evaluate(output);
      setOperand1(`${result}`);
      setOperand2('');
    }
    setOperator(value);
  };
  const handleClearClick = () => {
    setOperand1('');
    setOperand2('');
    setOperator('');
  };
  const handleEqualsClick = () => {
    if (operand1 && operand2 && operator) {
      const result = evaluate(output);
      setOperand1(`${result}`);
      setOperand2('');
      setOperator('');
      setIsResult(true);
    }
  };

  const handleBtnClick = (value) => {
    setIsResult(false);
    const number = numbers.find((n) => n === value);
    const operator = operators.find((o) => o === value);
    switch (value) {
      case number:
        handleNumberClick(value);
        break;
      case operator:
        handleOperatorClick(value);
        break;
      case 'C':
        handleClearClick();
        break;
      case '=':
        handleEqualsClick();
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.calculator}>
        <div className={styles.display}>
          <div
            className={styles['output-value']}
            style={{ color: isResult ? 'darkolivegreen' : 'darkslateblue' }}
          >
            {output}
          </div>
        </div>
        <div className={styles.buttons}>
          {buttonsData.map((btn) => {
            return (
              <button
                key={btn.id}
                className={`${styles['calc-button']} ${styles[btn.className]}`}
                onClick={() => {
                  handleBtnClick(btn.value);
                }}
              >
                {btn.value}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
