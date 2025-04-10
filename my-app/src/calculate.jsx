import { useState } from "react";

const Calculate = ({count, operation}) => {
    const [Calculation, setCal] = useState(0);


    return (
        <div className="bg-amber-800 m-2">
            <input type="button" value="=" onClick={() =>setCal(eval('{count} {operation} {count}'))}/>
        </div>
    );

}
export default Calculate