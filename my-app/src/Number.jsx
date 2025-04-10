import { useState } from "react";   


const Number = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <input type="number" value={count} onChange={(e) => setCount(e.target.value)}/>
        </div>
    );
};