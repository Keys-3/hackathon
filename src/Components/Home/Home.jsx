import React from 'react'
import bg from '../../assets/bg.svg';
import './home.css';

const Home = () => {
  return (
    <div className='home_div'>
      <div className='home_div_logo'>
        <img src={bg} alt="bg"/>
        <h1>Welcome to our Digital Locker</h1>
        <h2>Digital Power to</h2>
        <h3>Empower Every Student</h3>
      </div>
    </div>
  )
}

export default Home