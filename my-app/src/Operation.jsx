import { useState} from "react";

const OPERATIONS = ["+", "-", "*", "/"];

const Operation = ({Operation, setOperation}) => {
    
    return (    
        <div>    
            <select value={Operation} onChange={(e) => setOperation(e.target.value)}>
                {OPERATIONS.map((op) => (
                    <option key={op} value={op}>{op}</option>
                ))}
            </select>
        </div>
    );
};
export default Operation;