const Operators = ({SetOperator}) => {
    return (
        <select onChange={(e) => SetOperator(e.target.value)}> 
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
    );
};  
export default Operators