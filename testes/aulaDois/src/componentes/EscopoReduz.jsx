const EscopoReduz = () => {
    function handleClick(){
        return(
            alert("Eai Veyyyyyyyyyyyyy")
        )
    }
    
    return (
        <>
            <button onClick={() => console.log("Clicastes")}>Clique</button>
            <div>
                <button onClick={() => alert("Falou e disse meu chapa")}>Novo butão</button>
            </div>
            <div>
                <button onClick={handleClick}></button>
            </div>
        </>
    )
} 

export default EscopoReduz