import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to Mood-Food</h1>
      <h2>To Browse all Menu, click the below button or go to the Menu page</h2>
      <button className='btn '>
      <NavLink className="goTo-btn" to="/menu">Explore Menu</NavLink>
      </button>
    </div>
  )
}

export default Home
