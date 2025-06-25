import { useState } from "react";
import "./Formulario.css"

export default function Teste(){

    const[name,setName] = useState("")
    const[profissao,setprofissao] = useState("")
    const[cor,setCor] = useState("")

    return (

        <>
            <form action="">
                <label>
                    <span>Nome: {name}</span>
                    <input type="text" placeholder="Digite seu nome" onChange={(e) => (setName(e.target.value))} value={name}/>
                    
                </label>
            </form>
        </>

    )

}