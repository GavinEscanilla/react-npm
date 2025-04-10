import { useState } from "react";   


const Number = () => {
    const [count, setCount] = useState(0);
    return (
        <div className=" border-2 text-8xl font-bold text-center w-20">
            <input type="number" className="w-20" value={count} onChange={(e) => setCount(e.target.value)}/>
        </div>
    );
};
export default Number;