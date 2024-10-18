import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>        
        <Link to={"/"}>
          <Button sx={{marginTop: 4, width: 100}} variant="contained">Inicio</Button>
        </Link>
        <Link to={"/character"}>
          <Button sx={{marginTop: 4, width: 100}} variant="contained">2</Button>  
        </Link>
        <Link to={"/character"}>
          <Button sx={{marginTop: 4, width: 100}} variant="contained">3</Button>
        </Link>
        <Link to={"/about"}>
          <Button sx={{marginTop: 4, width: 100}} variant="contained">4</Button>
        </Link>
    </nav>
  )
}

export default NavBar