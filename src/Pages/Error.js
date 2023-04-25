import React from 'react'
import { useData } from '../Contexts/DataProvider'

const Error = () => {
  const {error} = useData();
  return (
    <div className='home'>
      <h1>{error.status}{""}</h1>
      <p>{error.message}</p>
    </div>
  )
}

export default Error
