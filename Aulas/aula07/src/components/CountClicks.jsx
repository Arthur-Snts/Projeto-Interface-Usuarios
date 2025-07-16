import { useState, useEffect } from 'react'

export default function CountClicks() {
  const [count, setCount] = useState(0)
  const [monitor, setMonitor] = useState(false)
  const [mudar, setMudar] = useState(0)

  //useeffect (configurar, dependencias?)

  function handleColor(){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

            if (monitor){
                setMudar(mudar+1)
            }
            
    }   

  useEffect(() => {
    handleColor()
  },[{mudar}])

  function handleClick(){
    setCount(count + 1)
    setMonitor(!monitor)
  }

  return (
    <>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
    </>
  )
}