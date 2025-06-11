import { useState } from "react"

export default function Contador(){
    
    let [valor, setValor] = useState(0) // Usando useState para ficar olhando e mudando o valor da variável

    function maisdez(valornovo) {
        setValor(valornovo)
        if (valornovo > 10){
            document.getElementsByClassName("encremento")[0].style.backgroundColor = "Green" // Colorindo o background do botão quando for maior que 10
            document.getElementsByClassName("decremento")[0].style.backgroundColor = "Black" // Descolorindo o background do botão contrário quando for menor que 10
        }
        
    }
    

    function menosdez(valornovo){
        setValor(valornovo)
        if(valornovo<0){
            document.getElementsByClassName("decremento")[0].style.backgroundColor = "Red" // Colorindo o background do botão quando for menor que 10
            document.getElementsByClassName("encremento")[0].style.backgroundColor = "Black" // Descolorindo o background do botão contrário quando for menor que 10
        }
        
    }

    return(
        <>
            <p>Este é o valor atual: {valor}</p> {/* Mostrando Valor da variável */}
            <button className="encremento" onClick={() => {maisdez(valor+1)}}>
                {/* Botão que incrementa valor quando clicado */}
                Encremente +1
            </button>
            <button className="decremento" onClick={() => {menosdez(valor-1)}}>
                {/* Botão que decrementa valor quando clicado */}
                Decremente -1
            </button>
        </>
    )
}