import Images from "./Images";
import ChangeValue from "./ChangeValue";

function Conditional(){
     let content;
     let isLogged = true;


     if(isLogged){
         content = <Images />
     } else {
         content = <ChangeValue />
     }

     return(
         <>
             {content}
             <button onClick={() => {content = true}}>Mudar Estado</button>
         </>
     )
 }

 export default Conditional