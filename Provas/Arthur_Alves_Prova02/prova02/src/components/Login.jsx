import { useState } from "react"

export default function Formulario(){

    const [login, setLogin] = useState("")
    const [chave, setChave] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (chave == "AlunoPIU"){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;
            console.log("Parabéns! Você conseguiu")}
        else {
                console.log("Palavra-Chave Errada, Tente Novamente")
            }
        setLogin("")
        setChave("")
    }

   

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={login} onChange={(e)=>(setLogin(e.target.value))} placeholder="Digite um Login" />
            <input type="text" value={chave} onChange={(e)=>(setChave(e.target.value))} placeholder="Digite uma Palavra Chave" />
            <input type="submit" value="Enviar" />
        </form>
        </>
    )
}