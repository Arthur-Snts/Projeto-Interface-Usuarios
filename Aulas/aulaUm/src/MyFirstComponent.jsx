function MyFirstComponent (){

    const nome = "love you baby"
    let h1 = Document.h1
    return(
        <>
            <h1 onMouseOver={function(){h1+"y"}}>HEHEE BOYYYYYYY</h1>
            <h2>Deixe o dedo do meio</h2>
            <div>
                <p>Seu nome é {nome}</p>    
            </div>        
        
        </>

    )

}

export default MyFirstComponent