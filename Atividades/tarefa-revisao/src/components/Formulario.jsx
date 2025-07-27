import { useState } from "react"

export default function Formulario(){

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [usuarios, setUsuarios] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault();
        var usuario = {
            "email": email,
            "senha": senha
        }

        var usuarios_temp = usuarios
        usuarios_temp.push(usuario)
        setUsuarios(usuarios_temp)

        console.log(usuarios)

        setEmail("")
        setSenha("")
        
    }

   

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={(e)=>(setEmail(e.target.value))} placeholder="Digite um Email" />
            <input type="text" value={senha} onChange={(e)=>(setSenha(e.target.value))} placeholder="Digite um Senha" />
            <input type="submit" value="Enviar" />
        </form>
        </>
    )
}