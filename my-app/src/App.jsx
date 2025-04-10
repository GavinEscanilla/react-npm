import { useState } from "react";
import Number from "./Number";
import Operation from "./Operation";
import Calculate from "./calculate";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-gray-100 h-screen  items-center">
      <h1 className="text-8xl font-bold text-center">practice</h1>
      <div className="text-8xl font-bold text-center flex items-center justify-center m-80">
      <Number />
      <Operation />
      <Number />
      <Calculate Number1={count} operationeation={operation}  />
      </div>
      <Answer Calculation={Calculation}/>
    </div>
  );
}

export default App;
