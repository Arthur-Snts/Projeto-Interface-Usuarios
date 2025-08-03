import { useState } from "react"

export default function Login_aula() {

    const [nome, setNome] = useState("")
    const [palavra,setPalavra] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];   

        if (palavra == "ProvaPIU1V"){
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

        }

        setNome("")
        setPalavra("")
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite um Nome" value={nome} onChange={(e) => (setNome(e.target.value))}/>
                <input type="text" placeholder="Digite uma Palavra Chave" value={palavra} onChange={(e)=> (setPalavra(e.target.value))}/>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}