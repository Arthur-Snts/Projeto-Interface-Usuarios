export default function Tema(){
     let color;
     let isBlack = true;


     if(isBlack){
        color = "Black"
     } else {
        color = "White"
     };

     let body = document.body;
     
     
     body.style.backgroundColor = color

     function mudar() {
        isBlack = !isBlack
        if(isBlack){
        color = "Black"
        } else {
            color = "White"
        };

        body.style.backgroundColor = color;
        
        
        
        if(isBlack){
        document.documentElement.style.color = "White";
        } else {
            document.documentElement.style.color = "Black";
        };
     }

     return(
         <>
            <br />
            <button onClick={mudar}>Alterar Tema</button>
         </>
     )
 }
