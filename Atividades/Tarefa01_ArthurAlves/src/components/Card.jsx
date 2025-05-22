

export default function Card(props){
    
    

    return(
        <>
            <figure onClick={props.onClick} style={{ cursor: 'pointer' }}>
                <img src={props.screen} />
                <figcaption>{props.legenda}</figcaption>
            </figure>
        </>
    )
}