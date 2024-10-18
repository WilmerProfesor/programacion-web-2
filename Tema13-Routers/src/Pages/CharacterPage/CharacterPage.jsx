import "./CharacterPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CharacterPage = () => {
  
  const [charId, setCharId]=useState(0);
  let {id} = useParams();
  
 useEffect(()=>{
   setCharId(id);
 },[id]);

  return (
    <main id='character-page'>
        <h1>Character Page</h1>
    </main>
  )
}

export default CharacterPage