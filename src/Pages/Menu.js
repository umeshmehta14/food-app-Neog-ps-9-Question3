import React from 'react'
import { useData } from '../Contexts/DataProvider'
import Filter from '../Components/Filter';
import MenuDetails from '../Components/MenuDetails';

const Menu = () => {
  const {filteredData} = useData();

  return (
    <>
        <Filter/>
        <div className="container">
      <h1>Menu</h1>
      <div className='menu-container'>
        {
          filteredData.map((menu)=> {
          return <MenuDetails key={menu.id} menu={menu} isCart={false}/>
        } )
        }
        {filteredData.length === 0 && <h1>Item Not Found</h1>}
      </div>
      </div>

    </>
  )
}

export default Menu
