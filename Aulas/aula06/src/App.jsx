import './App.css'
import Formulario from "./components/Formulario"
import FormularioSelect from "./components/FormularioSelect"
import FormularioState from "./components/FormularioState"
import Teste from './components/Teste'

function App() {
  

  return (
    <>
      <div className="App">
        <h1>Trabalhando com Formulários</h1>
          <Formulario/>
          <br />
          <hr />
          <FormularioState/>
          <br />
          <hr />
          <FormularioSelect/>
          <hr />
          <hr />
          <Teste></Teste>


      </div>
    </>
  )
}

export default App
