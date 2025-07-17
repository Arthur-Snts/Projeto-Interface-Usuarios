import { useEffect, useState } from "react";



export default function DesafioPost(){

    const API = "http://127.0.0.1:8000/alunos"

    const [enviar, setEnviar] = useState(false)
    const [nome, setNome] = useState("")
    const [matricula, setMatricula] = useState("")
    const [id, setId] = useState(0)

    

    useEffect(() => {
    const enviarDados = async () => {
        
        const novoPost = {
            "id": id,
            "nome": nome,
            "matricula": matricula
        }

        try {
        const response = await fetch(API, { //aqui deve ser inserido o endereço da API
            method: 'POST', // método POST para envio de dados
            headers: {
            'Content-Type': 'application/json' // informa que os dados estão em JSON
            },
            body: JSON.stringify(novoPost) // converte o objeto JS em JSON
        });
        

        const data = await response.json();
        console.log("Resposta da API:", data);
        } catch (error) {
        console.error("Erro ao enviar dados:", error);
        }
    };

    
    if (enviar) {
            enviarDados();
            setEnviar(false); // reseta o gatilho
        }
    }, [enviar]);

    return(
        <div>
            <form onSubmit={(e) => {
                    e.preventDefault(); // previne o reload da página
                    setEnviar(true);
                }}
            >
                <h1>Envio de dados</h1>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite um título"/>
                <br />
                <input type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)} placeholder="Digite uma Matrícula"/>
                <br />
                <input type="number" value={id} onChange={(e) => setId(Number(e.target.value))} placeholder="Digite uma ID"/>
                <br />
                <input type="submit" value="Enviar" style={{color:"black"}}/>
            </form>
        </div>

    )
}