import { useEffect, useState } from "react"

export default function DarkMode(){

    const [dark,setDark] = useState(false)

    function toggletheme(){
        if (dark){
            document.body.style.backgroundColor = "Black"
            document.documentElement.style.color = "White"
            document.documentElement.style.backgroundColor = "Black"}
        else{
            document.body.style.backgroundColor = "White"
            document.documentElement.style.color = "Black"
            document.documentElement.style.backgroundColor = "White"
        }
    }

    useEffect(()=>{toggletheme()},[dark])

    return(
        <>
        <button onClick={()=>setDark(!dark)} style={{backgroundColor:"black"}}>Trocar Tema ({dark ? "Claro" : "Escuro"})</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ab perferendis tempora esse aliquam ullam illo ipsam est, soluta ut. Voluptates dolor consectetur velit. Accusantium architecto praesentium possimus dolore libero.</p>
        </>
    )
}