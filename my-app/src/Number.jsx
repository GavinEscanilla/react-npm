import { useState } from "react";   


const Number = ({value, onChange}) => {

    return (
        <div className=" border-2 text-8xl font-bold text-center w-20">
            <input type="number" className="w-20" value={value} onChange={(e) => onChange(e.target.value)}/>
        </div>
    );
};
export default Number;