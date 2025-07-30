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
        usuarios.map(usuario=>
            {if (usuario.id == id){
                setFiltrado(usuario)
            }})}
    }
    useEffect(()=>{filtrarUsuarios()},[id])


   

    return (
        <div>
            {id >=1 &&(
            <div>
                <h3>Dados do Usuário de Id: {id}</h3>
                <ul>
                    {filtrado}
                    
                    <button onClick={() => setCount((count) => count + 1)}>Resgatar Dados</button>
                </ul>
                
            </div>
            )}
            {id == 0 &&(
                <div>
                    <h3>Insira um Id de 1 a 10</h3>
                    <input type="number" value={id} onChange={(e)=> (setId(e.target.value))} />
                </div>
            )}
            
        </div>
    );
}