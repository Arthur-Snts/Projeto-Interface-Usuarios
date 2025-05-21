import "./Card.css"

export default function Card(props){
    

    return(
        <div>
            <figure>
                <img src={props.screen} alt="Imagem abstrata de corrente" />
                <figcaption>{props.legenda}</figcaption>
            </figure>
        </div>
    )
}