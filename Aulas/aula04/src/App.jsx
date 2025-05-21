import './App.css'
import Props from './components/Props'
import Children from "./components/Children"
import Texto from "./components/Texto"
import Card from "./components/Card"
import foto from "./assets/react.svg"


function App() {
  let aluno = "Arthur"

  return (
    <>
      {/* <Props nome={aluno} texto={"hahahhahha"} atributo={"burrito"}></Props>
      <Props nome={"Caicó"} imagem = {foto}></Props>
      <Props name={"Falho"}></Props> */}
      
      <Children>
          <Texto titulo={"Imagem 1"}></Texto>
          <br />
          <hr />
          <br />
          <Card screen={foto} legenda={"React"}></Card>
          
      </Children>
      
      
    </>
  )
}

export default App
