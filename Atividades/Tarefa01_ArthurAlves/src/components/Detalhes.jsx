export default function Detalhes(props){
    

    return(
        <>
            <figure>
                <h3>Detalhes do Personagem</h3>
                <p>{props.nome}</p>
                <img src={props.screen} style={{width: "300px"}} />
                <figcaption>{props.legenda}</figcaption>
            </figure>
        </>
    )
}