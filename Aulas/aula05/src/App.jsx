import './App.css'
import ListasMap from './components/ListasMap'
import ListasFilter from './components/ListasFilter'
import ListasObj from './components/ListasObj'
import Dropdown from './components/Dropdown'

function App() {

  const links=['Link1','Link2','Link3','Link4', 'Link5'];
  const titulos=['Menu1','Menu2','Menu3','Menu4', 'Menu5'];
  
  return (
    <>
     {/* <ListasMap />
     <br />
     <ListasFilter/>
     <br />
     <ListasObj/>
     <br /> */}
     <Dropdown titulos={titulos} links={links}/>
    </>
  )
}

export default App
