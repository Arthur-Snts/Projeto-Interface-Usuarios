import "./EscopoReduz.css"

function Escopo () {

    const label = "Clique Aqui"

    function muda (){   
        let h2 = document.getElementById("h2")
        h2.style.backgroundColor = "white"
    }

    return (
        <>
            <div>
                <h2 onClick={muda} id="h2">Texto de Componente</h2>
            </div>
            <div>
                <p>Lorem ipsum dolor sit, amet consecte   gvjn hbedws54er5trujhyjnhtur adipisicing elit.</p>
                <button>{label}</button>
            </div>
        </>
    )
}

export default Escopo