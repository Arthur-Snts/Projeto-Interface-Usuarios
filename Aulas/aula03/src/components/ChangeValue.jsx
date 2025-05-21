import { useState } from "react"

export default function ChangeValue(){
    
    let valor = 0
    
    let [valor2, setValor2] = useState(0)

    function numeric(){
        let variavel = valor2*2
        setValor2(variavel)
    }

    return(
        <>
            <div>
                <button onClick={() => {valor+1}}>Cliques {valor}</button>
            </div>
            <hr />
            <div>
                <button onClick={() => {setValor2(valor2+1)}}>Cliques {valor2}</button>
            </div>
            <hr />
            <div>
                <button onClick={numeric}>Cliques {valor2}</button>
            </div>
        </>
    )
}