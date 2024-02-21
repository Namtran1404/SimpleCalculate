
import { useState } from 'react';

function App() {
  const [number1, setnumber1] = useState('');
  const [number2, setnumber2] = useState(''); 
  const [result, setResult] = useState('');

  const handleCalculate = (operator) => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let calculatedResult;

    switch (operator) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '*':
        calculatedResult = num1 * num2;
        break;
      case '/':
        calculatedResult = num1 / num2;
        break;
      default:
        return;
    }

    setResult(calculatedResult);
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input type="number" value={number1} onChange={(e) => setnumber1(e.target.value)}/>
      <input type="number"value={number2} onChange={(e) => setnumber2(e.target.value)}/>
      <button onClick={() => handleCalculate('+')}>+</button>
      <button onClick={() => handleCalculate('-')}>-</button>
      <button onClick={() => handleCalculate('*')}>*</button>
      <button onClick={() => handleCalculate('/')}>/</button>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;