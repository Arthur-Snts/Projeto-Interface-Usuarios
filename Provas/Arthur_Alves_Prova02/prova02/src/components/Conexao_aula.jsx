import { useEffect, useState } from "react"

export default function Conexao_aula(){

    const [id, setId] = useState(0)
    const [usuarios, setUsuarios] = useState([])
    const [count,setCount] = useState(0)
    const [filtrado, setFiltrado] = useState(null)

    const fetchUsuarios = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json(); 
            setUsuarios(data); 
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
        }
    
    useEffect(() =>{fetchUsuarios()}, [count])

    function filtradora (){
        
        if (id >= 1){
            var lista = usuarios.filter(usuario => usuario.id == id)
            setFiltrado(lista[0])
           
        } else{
            setFiltrado(null)
        }
        
    }

    useEffect(()=> {filtradora()}, [id])


    return(
        <>
            <h1>Digite um Número de 1 a 10</h1>
            <form>
                <input type="Number" placeholder="Digite um Número de 1 a 10" value={id} onChange={(e) => (setId(Number(e.target.value)))}/>
            </form>
            {filtrado  &&(
                <div>
                    <h3>Usuario exibido de Id {id}</h3>
                    <ul>
                        <li>{filtrado.name}</li>
                    </ul>
                    <button onClick={()=> setCount(count + 1)}>Resgatar Dados</button>
                </div>
            )
            }
        </>
    )
}