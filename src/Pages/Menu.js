import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataProvider'
import { NavLink } from 'react-router-dom';
import Filter from '../Components/Filter';

const Menu = () => {
  const {menuItem,HandleCart,searchValue} = useContext(DataContext);
  return (
    <div>
      <div className="container">
        <Filter/>
      <h1>Menu</h1>
      </div>
      <div className='menu-container'>
        {
          menuItem.map((item)=> {
            const {id,name,image,description,price,delivery_time,inCart} = item;
          return <div key={id} className='menu-box'>
            <img src={image} alt="Not Available" />
            <div>
                  {searchValue ? (
                    <p>
                      {name
                        .split(new RegExp(`(${searchValue})`, "gi"))
                        .map((substring, index) =>
                          substring.toLowerCase() ===
                          searchValue.toLowerCase() ? (
                            <em
                              style={{
                                backgroundColor: "lightblue",
                              }}
                              key={index}
                            >
                              {substring}
                            </em>
                          ) : (
                            <strong key={index}>{substring}</strong>
                          )
                        )}
                    </p>
                  ) : (
                    <p>
                      <strong>{name}</strong>
                    </p>
                  )}
                </div>
            <p><strong>Description:</strong>{description}</p>
            <p className='m-0'>Price:{price}</p>
            <p className='m-0'>Delivey Time:{delivery_time}</p>
            <button className="btn" onClick={()=> HandleCart(id)}>{inCart ? <NavLink className="goTo-btn" to="/cart">Go to Cart</NavLink>:"Add to Cart"}</button>
            </div>
        } )
        }
        <h1>{menuItem.length === 0 && "Item Not Found"}</h1>
      </div>
    </div>
  )
}

export default Menu
