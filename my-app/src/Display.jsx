import { useState } from "react";
import Input from "./componets/input";
import Operators from "./componets/Operator";
import Calculation from "./componets/Calculation";
const Display = () => {
  const [Num1, setNum1] = useState(0);
  const [Num2, setNum2] = useState(0);
  const [Operator, setOperator] = useState("+");
  const [Result, setResult] = useState(0);
  return (
    <div className="App  border-blue-600  w-screen h-full  border-2 flex flex-col justify-center">
      <div className="flex flex-row border-2 border-red-950 justify-center">
        <Input Setvalue={setNum1} />
        <Operators SetOperator={setOperator} />
        <Input Setvalue={setNum2} />
      </div>
 <Calculation num1={Num1} Op={Operator} num2={Num2} result={Result} setResult={setResult} /> 
    </div>
  );
};

export default Display;
