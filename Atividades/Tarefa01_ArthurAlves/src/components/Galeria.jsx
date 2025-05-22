import Card from "./Card"
import Detalhes from "./Detalhes"
import arlequina from "../assets/arlequina.jpg"
import coringa from "../assets/coringa.jpg"
import homer from "../assets/homer.jpg"
import law from "../assets/law.jpg"
import mario from "../assets/mario.jpeg"
import zoro from "../assets/zoro.jpg"



export default function Galeria(){



    return(
        <>
            <h1>Galeria de Personagens</h1>
            <div>
                <Card legenda={"Arlequina"} screen={arlequina}></Card>
                <Card legenda={"Coringa"} screen={coringa}></Card>
                <Card legenda={"Homer"} screen={homer}></Card>
                <Card legenda={"Law"} screen={law}></Card>
                <Card legenda={"Mario"} screen={mario}></Card>
                <Card legenda={"Zoro"} screen={zoro}></Card>
            </div>
            
            
        </>
    )
}