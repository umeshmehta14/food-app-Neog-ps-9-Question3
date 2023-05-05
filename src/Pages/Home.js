import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="main-box">
    <div className='home container'>
      <h1>Welcome to Mood-Food</h1>
      <h2>To Browse all Menu, click the below button or go to the Menu page</h2>
      <button className='btn' onClick={()=> navigate("/menu")}>Explore Menu
      </button>
    </div>
    </div>
  )
}

export default Home
