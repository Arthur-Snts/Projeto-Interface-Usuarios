export default function Props (props) {


    return (
        <>
            <div>
                <h2>Teste de Props</h2>
                <p>O nome {props.nome} foi passado via props</p>
                <p>Texto: {props.texto}</p>
                <p>{props.atributo}</p>
                <img src={props.imagem}/>
            </div>
        </>
    )
}