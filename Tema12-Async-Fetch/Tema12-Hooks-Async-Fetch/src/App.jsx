import React from 'react'
import "./App.css"

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import UserList from './Components/UsersList/UserList'

const App = () => {
  return (
    <>
      <Header/>
      <UserList/>
      <Footer/>
    </>
  )
}

export default App
