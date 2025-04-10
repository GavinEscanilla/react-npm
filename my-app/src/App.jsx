import { useState } from "react";
import Number from "./Number";
import Operation from "./Operation";
import Calculate from "./calculate";
import "./App.css";
import Answer from "./Answer";

function App() {
  const [Numbr1, setNumber1] = useState(0);
  const [Numbr2, setNumber2] = useState(0);
  const [Operation, setOperation] = useState("");
  const [Calculation, setCal] = useState(0);

  return (
    <div className="App bg-gray-100 h-screen  items-center">
      <h1 className="text-8xl font-bold text-center">practice</h1>
      <div className="text-8xl font-bold text-center flex items-center justify-center m-80">
      <Number value={Numbr1} onChange={setNumber1} />
      <Operation setOperation={setOperation} />
      <Number value={Numbr2} onChange={setNumber2}/>
      <Calculate Number1={Numbr1} Number2={Numbr2} Operation={Operation} setCal={setCal} />
      </div>
      <Answer Calculation={Calculation}/>
    </div>
  );
}

export default App;
