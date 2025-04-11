const Calculation = ({num1, Op, num2, result, setResult}) => {
    const handleCalculate = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let res = 0;
    
        switch (Op) {
          case '+':
            res = a + b;
            break;
          case '-':
            res = a - b;
            break;
          case '*':
            res = a * b;
            break;
          case '/':
            res = b !== 0 ? a / b : 'Error (divide by 0)';
            break;
          default:
            res = 'Invalid operator';
        }
    
        setResult(res);
      };
    return (
        <div className="App  border-2 border-rose-200 h-24 flex flex-row"> 
           <input type="button" value="=" onClick={handleCalculate} className="text-4xl w-15 border-2"/>
           <div>{result}</div>
        </div>
    );
};
export default Calculation