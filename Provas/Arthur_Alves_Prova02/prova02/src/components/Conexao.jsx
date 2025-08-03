import { useState, useEffect } from 'react';

export default function Conexao() {
    const [usuarios, setUsuarios] = useState([]);
    const [id, setId] = useState(0)
    const [count, setCount] = useState(0)
    const [filtrado, setFiltrado] = useState({})

    const fetchUsuarios = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json(); 
            setUsuarios(data); 
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
        }

    useEffect(() => {fetchUsuarios()} , [count]);

    const filtrarUsuarios = () =>{
        if (id >=1){
        var consulta = usuarios.filter(usuario => usuario.id == id)
        setFiltrado(consulta[0])
    }}
    useEffect(()=>{filtrarUsuarios()},[id])


   

    return (
         <div>
            <h3>Insira um ID de 1 a 10</h3>
            <input type="number" value={id} onChange={(e) => setId(Number(e.target.value))} />

            {filtrado && (
                <div>
                    <h3>Dados do Usuário de Id: {id}</h3>
                    <p>{filtrado.name}</p>
                    <p>{filtrado.username}</p>
                    <p>{filtrado.address?.city}</p> {/*O React não verificar o valor de address antes de renderizar o filtrado */}
                    
                    
                    <button onClick={() => setCount(count + 1)}>Resgatar Dados</button>
                </div>
            )}
        </div>
    );
}