import "./Header.css";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
        <img id='logo-header' src="https://m.media-amazon.com/images/M/MV5BN2U2YzU1ZjYtZjAyZS00MjhhLTliMzctMmRjMjI2MjdjNzEyXkEyXkFqcGc@._V1_.jpg" alt="Logo React And Morty" />
        <h1>Rick And Morty The Serie</h1>
        <p>Characters</p>
        <NavBar/>
    </header>
  )
}

export default Header