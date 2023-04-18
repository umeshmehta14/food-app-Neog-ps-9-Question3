import React, { useContext, useState } from 'react'
import { DataContext } from '../Contexts/DataProvider'

const Cart = () => {
    const {menuItem,RemoveFromCart} = useContext(DataContext);
    const [click, setClick] = useState(false)
    const cart = menuItem.filter(({inCart}) => inCart);
    const totalDeliveyTime = cart.reduce((acc,{delivery_time}) => acc+delivery_time,0);
    const totalCost = cart.reduce((acc,{price}) => acc+price,0);
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
          cart.map((item)=> {
            const {id,name,image,description,price,delivery_time} = item;
          return <div key={id} className='menu-box'>
            <img src={image} alt="Image Not available" />
            <p>Name:{name}</p>
            <p><strong>Description:</strong>{description}</p>
            <p>Price:{price}</p>
            <p>Delivey Time:{delivery_time}</p>
            <button className='btn' onClick={()=>RemoveFromCart(id)}>Remove From Cart</button>
            </div>
        } )
        }
      </div>
    </div>
  )
}

export default Cart
