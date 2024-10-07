import React from 'react'

// Importar componentes
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AnimalCard from './Components/AnimalCard/AnimalCard'

const App = () => {
  return (
    <>
      <Header/>
      <div>App</div>
      <AnimalCard name="Iguana" img="https://cdn0.ecologiaverde.com/es/posts/7/1/2/la_iguana_esta_en_peligro_de_extincion_4217_600_square.jpg"/>
      <AnimalCard name="Perro" img="https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg"/>
      <AnimalCard name="Gato" img="https://s1.elespanol.com/2023/03/10/curiosidades/mascotas/747436034_231551833_854x640.jpg"/>      
      <Footer/>
    </>
  )
}

export default App









// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
