export default function Detalhes(props){
    

    return(
        <>
            <figure>
                <h3>Detalhes do Personagem</h3>
                <img src={props.screen} alt="Imagem abstrata de corrente" />
                <figcaption>{props.legenda}</figcaption>
            </figure>
        </>
    )
}