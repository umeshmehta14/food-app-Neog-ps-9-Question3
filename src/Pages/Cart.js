import React, { useState } from 'react'
import { useData } from '../Contexts/DataProvider'
import MenuDetails from '../Components/MenuDetails';

const Cart = () => {
    const {menuItem} = useData();
    const [click, setClick] = useState(false);
    const cart = menuItem.filter(({inCart}) => inCart);
    const totalDeliveyTime = cart.reduce((acc,{delivery_time}) => acc+delivery_time,0);
    const totalCost = cart.reduce((acc,{price,Selected}) => acc+= price * Selected,0).toFixed(2);
  return (
    <div>
      <div className="container">
        {cart.length > 0 ? <>
      <h1>Cart</h1>
      <h3>Total Delivery Time:{totalDeliveyTime}</h3>
      <h3>Total Cost:{click ?totalCost - 5: totalCost}</h3>
      <button disabled={click} onClick={()=> setClick(true)} className="btn coupon">Apply Coupon</button>
        </>:<h1>Your Cart is Empty Buy Some Food</h1>}
      </div>
      <div className='menu-container'>
        {
          cart.map((menu)=> {
          return <MenuDetails key={menu.id} menu={menu} isCart={true}/>
        } )
        }
      </div>
    </div>
  )
}

export default Cart
