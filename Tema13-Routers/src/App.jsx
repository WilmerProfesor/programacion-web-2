import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css"

import Header from "./Components/Header/Header"

import HomePage from "./Pages/HomePage/HomePage";
import CharacterPage from "./Pages/CharacterPage/CharacterPage"
import AboutPage from "./Pages/AboutPage/AboutPage"

const App = () => {
  return (
    <div className="App">
      <Router>

        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/character/:id" element={<CharacterPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App