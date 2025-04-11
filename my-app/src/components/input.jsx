const Input = ({Setvalue}) => {
     
    return (
        <div className="App  border-2 border-rose-200 h-24 flex flex-row">
            <input type="number" className="text-4xl " onChange={(e) => Setvalue(e.target.value)}/>
        </div>
    );
}
export default Input