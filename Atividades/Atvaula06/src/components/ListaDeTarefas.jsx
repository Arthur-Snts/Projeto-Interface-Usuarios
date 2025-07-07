import './ListaDeTarefas.css'
import { useState } from 'react'

export default function ListaDeTarefas(){

    const [tarefa, setTarefa] = useState({
        titulo: "",
        status: "Pendente",
        prioridade: "Alta",
        id :  Math.floor(Math.random()*1000000000)
    })

    const [lista, setLista] = useState([])

    const [itemEditandoId, setItemEditandoId] = useState(null);
    const [novoTitulo, setNovoTitulo] = useState("");

    // funçao de adicionar tarefa
    const handleSubmit = (e) => {
        e.preventDefault();
        const novaTarefa = {
            titulo: tarefa.titulo,
            status: "Pendente",
            prioridade: tarefa.prioridade,
            id :  Math.floor(Math.random()*1000000000)
        }
        setLista([...lista, novaTarefa])
        setTarefa({
            titulo: "",
            status: "Pendente",
            prioridade: "Alta",
            id :  Math.floor(Math.random()*1000000000)
        })
    }

    // Alterar status da tarefa (Concluir/Reabrir)
    const handleChange = (status_passado, item) => {
        setLista(prevLista =>
            prevLista.map(i =>
                i === item ? { ...i, status: status_passado } : i
            )
        )
    }

    // Excluir tarefa
    const handleDelete = (item) => {
        setLista(prevLista =>
            prevLista.filter(i => i !== item)
        )
    }


    // ============================= \\
    // ** Editar título da tarefa ** \\
    // ============================= \\


    // Entrar no modo de edição \\

    function handleToggleEditar(item) {
        setItemEditandoId(item.id);
        setNovoTitulo(item.titulo);
    }

    // Atualizar título \\
    function handleUpdate(e) {
        e.preventDefault();
        setLista(prevLista =>
          prevLista.map(item =>
            item.id === itemEditandoId ? { ...item, titulo: novoTitulo } : item
          )
        );
        setItemEditandoId(null);
        setNovoTitulo("");
      }
    // ============= \\
    // **Ordenação** \\
    // ============= \\

    // por titulo \\

    const ordenarPorTitulo = () => {
        const listaOrdenada = [...lista].sort((a, b) =>
            a.titulo.localeCompare(b.titulo)
        )
        setLista(listaOrdenada)
    }

    // por prioridade \\

    const ordenarPorPrioridade = () => {
        const prioridadeValor = { "Alta": 3, "Média": 2, "Baixa": 1 }
        const listaOrdenada = [...lista].sort((a, b) =>
            prioridadeValor[b.prioridade] - prioridadeValor[a.prioridade]
        )
        setLista(listaOrdenada)
    }

    // ================ \\
    // ** prioridade ** \\
    // ================ \\

    // almentar prioridade\\ 

    const aumentarPrioridade = (item) => {
    const novaPrioridade = {
        "Baixa": "Média",
        "Média": "Alta",
        "Alta": "Alta" 
    }

    setLista(prevLista =>
        prevLista.map(i =>
            i === item ? { ...i, prioridade: novaPrioridade[item.prioridade] } : i
        )
    );
}

    // diminuir prioridade \\
    const diminuirPrioridade = (item) => {
        const novaPrioridade = {
            "Baixa": "Baixa" ,
            "Média": "Baixa",
            "Alta": "Média"  
        }

        setLista(prevLista =>
            prevLista.map(i =>
                i === item ? { ...i, prioridade: novaPrioridade[item.prioridade] } : i
            )
        );
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
                        placeholder='Digite o Título da Tarefa' 
                    />
                    <select value={tarefa.prioridade} onChange={(e) => setTarefa(prev => ({ ...prev, prioridade: e.target.value }))}>
                        <option value="Alta">Prioridade Alta</option>
                        <option value="Média">Prioridade Média</option>
                        <option value="Baixa">Prioridade Baixa</option>
                    </select>
                </label>
                <input type="submit" value="Adicionar" className='botao-3d' style={{height:"50px"}}/>
            </form>

            <div className='ordena'>
                <button onClick={ordenarPorTitulo} className='botao-3d'>Ordenar por Título</button>
                <button onClick={ordenarPorPrioridade} className='botao-3d'>Ordenar por Prioridade</button>
            </div>

            <ul>
            {lista.map(item => (
                <li key={item.id} className="card-tarefa">
                    <div className="info-tarefa">
                        {itemEditandoId === item.id ? (
                            <form onSubmit={handleUpdate}>
                                <input
                                    type="text"
                                    value={novoTitulo}
                                    onChange={(e) => setNovoTitulo(e.target.value)}
                                    onBlur={() => setItemEditandoId(null)}
                                    className="input-edicao"
                                    autoFocus
                                />
                                
                            </form>
                        ) : (
                            <>
                                <span className="titulo" onClick={() => handleToggleEditar(item)} title="Clique para editar">{item.titulo === "" ? "Tarefa sem Título! Clique para editar" : item.titulo}</span>
                                <span className="prioridade">
                                    Prioridade: 
                                    <span style={{color: item.prioridade === "Alta" ? "hotpink" : item.prioridade === "Baixa" ? "pink" : "violet"}}> {item.prioridade}</span></span>
                                <span className="status">
                                    Status:
                                    <span style={{ color: item.status === "Pendente" ? "orange" : "green" }}> {item.status}</span>
                                </span>
                            </>
                        )}
                    </div>

                    
                    <div className="acoes-tarefa">
                        {item.status === "Pendente" ? (
                            <button onClick={() => handleChange("Concluída", item)} className="botao-3d" style={{border: "2px solid green"}}>Concluir ✅</button>
                        ) : (
                            <button onClick={() => handleChange("Pendente", item)} className='botao-3d' style={{border: "2px solid orange"}}>Reabrir 🔄</button>
                        )}
                        <button onClick={() => aumentarPrioridade(item)} className="botao-3d" disabled={item.prioridade === "Alta"}>➕ Prioridade</button>
                        <button onClick={() => diminuirPrioridade(item)} className="botao-3d" disabled={item.prioridade === "Baixa"}>➖ Prioridade</button>
                        <button onClick={() => handleDelete(item)} className="botao-3d excluir">🗑️</button>
                    </div>
                        
                </li>
                ))}
            </ul>
        </div>
    )
}