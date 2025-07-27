import { useState, useEffect } from 'react'

export default function TrocaFundo() {
  const [texto, setTexto] = useState("")
  //useeffect (configurar, dependencias?)

  function handleColor(){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;
    }   

  useEffect(() => {
    handleColor()
  },[{texto}])

  return (
    <>
      <div className="card">    
        <textarea name="texto" value={texto} onChange={(e)=>setTexto(e.target.value)} placeholder='Insira texto'></textarea>
      </div>
    </>
  )
}