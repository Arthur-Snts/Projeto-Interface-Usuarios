import {carros} from "./dados_carros"

export default function Listagem () {

    let carros_vermelhos = carros.filter(carro => carro.cor === 'vermelho') // Criando lista co  filter dos Carros vermelhos

    return (
        <>
            <h1>Todos os Carros</h1>
            {carros.map(carro => (
                // mapeando todos os carros 
                <div>
                    
                    <p>Modelo: {carro.modelo}</p> {/*exibindo os modelos*/}
                    <p>Ano: {carro.ano}</p> {/*exibindo os anos*/}
                    <hr />
                </div>
                
                ))
            }
            <h1>Apenas Carros Vermelhos</h1> 
            {carros_vermelhos.map(carro =>(
                // mapeando todos os carros vemelhos 
                <div>
                    
                    <p>Modelo: {carro.modelo}</p>  {/*exibindo os modelos*/}
                    <p>Ano: {carro.ano}</p> {/*exibindo os modelos*/}
                    <hr />
                </div>
            ))}
        </>
    )
}