import './App.css'
import Tarefa from './components/Tarefa'
import Diario from './components/Diario'


function App() {

  const tarefas = [
  {
    titulo: "Comprar mantimentos",
    descricao: "Ir ao mercado e comprar frutas, legumes e pão.",
    concluida: false
  },
  {
    titulo: "Estudar JavaScript",
    descricao: "Ler sobre objetos, arrays e funções.",
    concluida: true
  },
  {
    titulo: "Fazer exercícios",
    descricao: "Treino de academia com foco em pernas.",
    concluida: false
  },
  {
    titulo: "Organizar documentos",
    descricao: "Separar papéis importantes e jogar fora os desnecessários.",
    concluida: true
  },
  {
    titulo: "Responder e-mails",
    descricao: "Checar a caixa de entrada e responder mensagens pendentes.",
    concluida: false
  }
];



  return (
    <>
      <Diario>
        {tarefas.map(tarefa=> (
          <Tarefa nome = {tarefa.titulo} desc = {tarefa.descricao} concluida = {tarefa.concluida}></Tarefa>
        ))}
      </Diario>      
    </>
  )
}

export default App
