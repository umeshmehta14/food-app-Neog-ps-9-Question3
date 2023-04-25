import React from 'react'
import { useData } from '../Contexts/DataProvider'
import Filter from '../Components/Filter';
import MenuDetails from '../Components/MenuDetails';

const Menu = () => {
  const {filteredData} = useData();

  return (
    <div>
      <div className="container">
        <Filter/>
      <h1>Menu</h1>
      </div>
      <div className='menu-container'>
        {
          filteredData.map((menu)=> {
          return <MenuDetails key={menu.id} menu={menu} isCart={false}/>
        } )
        }
        <h1>{filteredData.length === 0 && "Item Not Found"}</h1>
      </div>
    </div>
  )
}

export default Menu
