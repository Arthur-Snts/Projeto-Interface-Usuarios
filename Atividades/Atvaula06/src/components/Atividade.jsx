import { useState } from "react";
import "./Atividade.css"

export default function Atividade(){

    const[tarefas,setTarefas] = useState([])
    const[tarefa,setTarefa] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setTarefas([...tarefas,tarefa]);
        setTarefa("");
    }

    const handleClear = () =>{
        setTarefas([])
    }

    return(
        <>
            <h2>Lista de Tarefas:</h2>
            <button onClick={handleClear}>Resetar</button>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome da Tarefa:</span>
                    <input type="text" placeholder="Digite o nome da Tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)}/>
                    
                </label>
                <button>Enviar</button>
            </form>
            
            <div>
                {tarefas &&(
                    tarefas.map(tarefa_aux =>(
                        <>
                            <span>Nome da Tarefa: {tarefa_aux}</span>
                            <button>Exclua</button>
                            <br />
                            
                        </>
                        
                    ))
                )}
            </div>
            
        </>
    )
}