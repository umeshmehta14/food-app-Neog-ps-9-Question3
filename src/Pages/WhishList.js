import React from 'react'
import { useData } from '../Contexts/DataProvider';
import MenuDetails from '../Components/MenuDetails';

const WhishList = () => {
    const {menuItem} = useData();
    const wishList = menuItem.filter(({inWishList}) => inWishList);
  return (
      <div className="container">
      <h1>WishList</h1>

        {wishList.length === 0 ? <h1>You Don't Have WishList Item </h1> : ""}
      <div className='menu-container'>
        {
          wishList.map((menu)=> {
          return <MenuDetails key={menu.id} menu={menu}/>
        } )
        }
      </div>
      </div>

  )
}

export default WhishList
