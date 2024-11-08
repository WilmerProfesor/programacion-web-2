import {useEffect, useState} from 'react';
import "./App.css";


import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./Firebase/firebaseConfig";

const App = () => {

  const [data, setData]=useState([]);

  useEffect(()=>{
    const chargeData=async()=>{
      // const q = query(collection(db, "Planta"), where("capital", "==", true));
      const q = query(collection(db, "Planta"));
      const querySnapshot = await getDocs(q);
      const info=[];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        info.push({...doc.data(), id:doc.id});
      });
      setData(info);            
    }
    chargeData();

  },[]);

  return (
    <div className='App'>
      {
        data.map((item)=>{
          return(
            <div key={item.id}>
              <img className='img_plant' src={item.img_url} alt="" />
              <h3 >{item.nombreCientifico}</h3>
              <p >{item.nombreComun}</p>
            </div>
            )
        })
      }
    </div>
  )
}

export default App