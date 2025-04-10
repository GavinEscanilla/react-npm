import { useState} from "react";

const OPERATIONS = ["+", "-", "*", "/"];

const Operation = () => {
    const [operation, setOperation] = useState("");

    return (    
        <div>    
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                {OPERATIONS.map((op) => (
                    <option key={op} value={op}>{op}</option>
                ))}
            </select>
        </div>
    );
};
export default Operation;