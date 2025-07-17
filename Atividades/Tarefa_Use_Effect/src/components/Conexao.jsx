import { useState, useEffect } from 'react';

export default function Conexao() {
    const [usuarios, setUsuarios] = useState([]);
    const [countname, setCountname] = useState(0);
    const [countusername, setCountusername] = useState(0);
    const [countcidade, setCountcidade] = useState(0);

    // Usamos uma função assíncrona 
    const fetchUsuarios = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users'); //fecth faz uma requisição HTTP utilizando o método GET
            const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
            setUsuarios(data); // Atualiza o estado com os dados recebidos
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
        }

    useEffect(() => {fetchUsuarios()} , [countcidade, countname, countusername]); // O array vazio garante que o efeito execute apenas uma vez

    return (
        <div style={{display:"flex", width: "100%", gap: "10px"}}>
            <div style={{border:"1px solid red" , padding:"10px"}}>
                <h3>Usuários Name</h3>
                <ul>
                    {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li>
                    ))}
                    
                </ul>
                <button onClick={() => setCountname((countname) => countname + 1)}>Resgatar Dados</button>
            </div>
            <div style={{border:"1px solid green" , padding:"10px"}}>
                <h3>Usuários Username</h3>
                <ul>
                    {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.username}</li>
                    ))}
                    
                </ul>
                <button onClick={() => setCountusername((countusersetCountusername) => countusersetCountusername + 1)}>Resgatar Dados</button>
            </div>
            <div style={{border:"1px solid yellow", padding:"10px"}}>
                <h3>Usuários City</h3>
                <ul>
                    {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.address.city}</li>
                    ))}
                    
                </ul>
                <button onClick={() => setCountcidade((countcidade) => countcidade + 1)}>Resgatar Dados</button>
            </div>
        </div>
    );
}