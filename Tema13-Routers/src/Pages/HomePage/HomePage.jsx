import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";
import axios from 'axios';

import CharCard from '../../Components/CharCard/ChardCard';

const HomePage = () => {

  const [data, setData] = useState([]);

  useEffect(
    () => {
      axios("https://rickandmortyapi.com/api/character")      
      .then(char=>setData(char.data.results))
    },[]);

  return (
    <main id='home-page'>
        <h1>Welcome to the home page</h1>
        <div id='characters'>
          {
            data.map((element)=>
              <Link to={"/character/"+element.id}>
                <CharCard key={element.id} img={element.image} nombre={element.name} especie={element.species}/>
              </Link>            
            )
          }
        </div>
    </main>
  )
}

export default HomePage