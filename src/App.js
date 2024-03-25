import React from 'react'
import {Home, Getstarted, Student, Contact, Navbar} from './Components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
            <Navbar />
            <Home />
            <Getstarted />
        </div>
    </div>
  )
}

export default App