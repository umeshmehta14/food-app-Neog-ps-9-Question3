import React from 'react'
import { NavLink } from 'react-router-dom'
import { useData } from '../Contexts/DataProvider'

const Header = () => {
  const {menuItem} = useData();
  const CartLength = menuItem.reduce((acc, {inCart}) => inCart? acc+1:acc, 0);
  const getStyle = ({isActive}) =>{
    return isActive?{
      textDecoration:"underline"
    }:{};
  }
  return (
    <nav>
      <ul>
        <li>
      <NavLink style={getStyle} to="/">Home</NavLink>
        </li>
        <li>
      <NavLink style={getStyle} to="/menu">Menu</NavLink>
        </li>
        <li>
      <NavLink style={getStyle} to="/cart">Cart{CartLength > 0 && `(${CartLength})`}</NavLink>

        </li>
      </ul>
    </nav>
  )
}

export default Header
