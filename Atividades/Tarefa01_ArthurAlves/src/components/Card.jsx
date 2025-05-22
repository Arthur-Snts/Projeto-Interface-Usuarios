export default function Card(props){
    

    return(
        <>
            <figure>
                <img src={props.screen} />
                <figcaption>{props.legenda}</figcaption>
            </figure>
        </>
    )
}