import React from 'react';

import "./Header.css";
import logoShop from "../../assets/logoPetShop.webp";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header = () => {
  return (
    <header>   
        <img id='logo-header' src={logoShop} alt="" />
        <AddShoppingCartIcon/>
        <p>Mi primera Pagina ASP con REACT Y VITE</p>
        <p>2024</p>
    </header>
  )
}

export default Header