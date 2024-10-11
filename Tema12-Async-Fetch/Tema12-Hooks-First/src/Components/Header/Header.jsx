import "./Header.css"

import logoGitHub from "../../assets/LogoGitHub.jpeg"

const Header = () => {
  return (
    <header>
        <h1>Users of GitHub</h1>
        <img id='logo-header' src={logoGitHub} alt="" />
    </header>
  )
}

export default Header