import React from 'react';

import "./Footer.css";

let x=2024;
let urlImg="https://i.pinimg.com/736x/f3/23/f4/f323f49790973310accaa012a1fb4104.jpg" ;

const Footer = () => {
  return (
    <footer>
        <img id='logo-footer' src={urlImg} alt="Logo Lorem Ipsum"/>
        <p className='NombreDeLaClase'>Power by S:P.C.</p>
        <p>{x/2}</p>
    </footer>
  )
}

export default Footer