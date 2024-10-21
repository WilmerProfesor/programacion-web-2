import "./App.css";
import {useState, useEffect} from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./Firebase/firebaseConfig";


const App = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    const chargeData=async()=>{
      const q = query(collection(db, "Planta"));
      const querySnapshot = await getDocs(q);
      const info=[];
      querySnapshot.forEach((doc) => {        
        info.push({...doc.data(), id: doc.id});
      });      
      setData(info);
    }
    chargeData();
    console.log(data);
  },[]);

  

  return (
    <div className="App">      
        {
          <div>
            return
             {data.map((elem)=>            
                <div key={elem.id} >
                  <h1>{elem.nombreCientifico}</h1>
                  <h2>{elem.nombreComun}</h2>
                  <img id="foto-planta" src={elem.img_url} alt="" />
                </div>            
            )} 
          </div>
        }      
    </div>
  )
}

export default App