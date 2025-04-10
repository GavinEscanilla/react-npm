import { useState } from "react";

const Calculate = ({Number1, Number2, Operation, setCal}) => {
 


    return (
        <div className="bg-amber-800 m-2">
            <input type="button" value="=" onClick={() =>setCal(eval(`${Number1} ${Operation} ${Number2}`))}/>
        </div>
    );

}
export default Calculate