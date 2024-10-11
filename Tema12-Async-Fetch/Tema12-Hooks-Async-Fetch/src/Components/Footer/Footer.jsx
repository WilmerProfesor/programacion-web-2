import { useState, useEffect } from "react"

import "./Footer.css"

const Footer = () => {

    const [counter, setCounter]= useState(0);
    const [counterTwo, setCounterTwo]= useState(10);

    const handlerIncrements= ()=>{
        setCounter(counter+1);
    }

    const handlerIncrementsTwo= ()=>{
        setCounterTwo(counterTwo+1);
    }

    useEffect(()=>{
        console.log("Hook:el counter se actualizó",{counter} );
    },[counter]);

  return (
    <footer>
        <h4>Powered By S:P.C.</h4>
        <p>2024</p>    
        <div>Contador {counter} </div>
        <button onClick={handlerIncrements}>Incrementar</button>
        <button onClick={()=>{setCounter(counter-1)}}>Decrementar</button>
        <div>Otro Contador {counterTwo} </div>
        <button onClick={handlerIncrementsTwo}>Incrementar el Segundo</button>
        <button onClick={()=>{setCounterTwo(counterTwo-1)}}>Decrementar el Segundo</button>
    </footer>
  )
}

export default Footer