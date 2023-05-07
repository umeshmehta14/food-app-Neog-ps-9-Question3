import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useData } from '../Contexts/DataProvider'
import { AiFillHeart, BsCart4 } from '../Icons/Icons';
import bibimbap from "../Images/bibimbap.png"


const Header = () => {
  const {menuItem} = useData();
  const navigate= useNavigate();
  const CartLength = menuItem.reduce((acc, {inCart}) => inCart? acc+1:acc, 0);
  const WishListLength = menuItem.reduce((acc, {inWishList}) => inWishList? acc+1:acc, 0);
  const getStyle = ({isActive}) =>{
    return isActive?{
      color:"#f5c44a"
    }:{};
  }
  return (
    <nav className='navbar'>
      <div className='logo-name' onClick={()=>navigate("/")}>Mood-Food</div>
      <ul>
        <li>
      <NavLink className="h-yellow" style={getStyle} to="/">Home</NavLink>
        </li>
        <li>
      <NavLink className="h-yellow" style={getStyle} to="/menu">Menu</NavLink>
        </li>
        <li>
      <NavLink title='Cart' style={{getStyle, position:"relative"}}  to="/cart"><span className='icon'><BsCart4 className="h-yellow"/></span><div className='sm-badge'>{CartLength > 0 && `${CartLength}`}</div></NavLink>
      <NavLink title='WishList' style={{getStyle, position:"relative"}}  to="/wishlist" ><span className='icon'><AiFillHeart className="h-yellow"/></span>
      <div className='sm-badge'>{WishListLength > 0 && `${WishListLength}`}</div>
      </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
