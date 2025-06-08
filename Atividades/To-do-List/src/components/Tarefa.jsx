import { useState } from "react"

export default function Tarefa (props) {

    let [concluida, setConcluida] = useState(props.concluida)

    return(
        <>
        <h3>{props.nome}</h3>
        <p>Descrição: {props.desc}</p>
        <p style={{ color: concluida ? "green" : "red" }}>A Tarefa está {concluida == true ? "Concluida" : "Pendente"}</p>
        <button onClick={() => setConcluida(!concluida)}>{concluida == false ? "Concluir" : "Reabrir"}</button>
        <hr />
        </>
    )
}