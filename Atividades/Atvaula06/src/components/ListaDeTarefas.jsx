import './ListaDeTarefas.css'
import { useState } from 'react'

export default function ListaDeTarefas(){

    const [tarefa, setTarefa] = useState({
        titulo: "",
        status: "Pendente",
        prioridade: "Alta"
    })

    const [lista, setLista] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const novaTarefa = {
            titulo: tarefa.titulo,
            status: "Pendente",
            prioridade: tarefa.prioridade
        }
        setLista([...lista, novaTarefa])
        setTarefa({
            titulo: "",
            status: "Pendente",
            prioridade: "Alta"
        })
    }

    const handleChange = (status_passado, item) => {
        setLista(prevLista =>
            prevLista.map(i =>
                i === item ? { ...i, status: status_passado } : i
            )
        )
    }

    const handleDelete = (item) => {
        setLista(prevLista =>
            prevLista.filter(i => i !== item)
        )
    }

    const ordenarPorTitulo = () => {
        const listaOrdenada = [...lista].sort((a, b) =>
            a.titulo.localeCompare(b.titulo)
        )
        setLista(listaOrdenada)
    }

    const ordenarPorPrioridade = () => {
        const prioridadeValor = { "Alta": 3, "Média": 2, "Baixa": 1 }
        const listaOrdenada = [...lista].sort((a, b) =>
            prioridadeValor[b.prioridade] - prioridadeValor[a.prioridade]
        )
        setLista(listaOrdenada)
    }

    return(
        <div>
            <h2>Lista de Tarefas React</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        value={tarefa.titulo}
                        onChange={(e) => setTarefa(prev => ({ ...prev, titulo: e.target.value }))} 
                    />
                    <select value="Alta" onChange={(e) => setTarefa(prev => ({ ...prev, prioridade: e.target.value }))}>
                        <option value="Alta">Prioridade Alta</option>
                        <option value="Média">Prioridade Média</option>
                        <option value="Baixa">Prioridade Baixa</option>
                    </select>
                </label>
                <input type="submit" value="Adicionar" />
            </form>

            <div style={{ marginTop: 20 }}>
                <button onClick={ordenarPorTitulo} style={{ marginRight: 10 }}>Ordenar por Título</button>
                <button onClick={ordenarPorPrioridade}>Ordenar por Prioridade</button>
            </div>

            <ul>
                {lista.map((item, index) =>
                    <li key={index}>
                        Título: {item.titulo} | Situação: 
                        <span style={{ color: item.status === "Pendente" ? "orange" : "green" }}> {item.status} </span>
                        | Prioridade: 
                        <span style={{color: item.prioridade === "Alta" ? "violet" : item.prioridade === "Baixa" ? "white" : "pink"}}> {item.prioridade}</span>
                        <button style={{border: "2px solid green"}} onClick={() => handleChange("Concluída", item)}>Concluir</button>
                        <button style={{border: "2px solid orange"}} onClick={() => handleChange("Pendente", item)}>Reabrir</button>
                        <button style={{border: "2px solid red"}} onClick={() => handleDelete(item)}>Fechar</button>
                    </li>
                )}
            </ul>
        </div>
    )
}