import React from 'react'
import { useData } from '../Contexts/DataProvider';
import MenuDetails from '../Components/MenuDetails';
import { AiOutlineHeart } from '../Icons/Icons';

import { useNavigate } from 'react-router-dom';

const WhishList = () => {
    const {menuItem} = useData();
    const navigate = useNavigate();
    const wishList = menuItem.filter(({inWishList}) => inWishList);
  return (
      <div className="container">
        {wishList.length === 0 ? <div className='wishlist-empty'> 
        <h1>Nothing Here Yet <AiOutlineHeart/> </h1>
        <h1>Add Items You Like</h1>
        <div className='btn m-auto'  onClick={()=> navigate("/menu")}>Add Item</div>
        </div> : <h1>WishList</h1>}
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
