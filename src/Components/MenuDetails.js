import React, { useContext } from "react";
import { DataContext } from "../Contexts/DataProvider";
import { NavLink } from "react-router-dom";

const MenuDetails = ({ menu,isCart }) => {
  const { HandleCart,filters:{searchValue},HandleCartItemsQuantity } = useContext(DataContext);

  const {id,name,image,description,price,delivery_time,inCart,Selected} = menu;


  return (
    <div key={id} className="menu-box">
      <img src={image} alt="Not Available" />
      <div>
        {searchValue ? (
          <p>
            {name
              .split(new RegExp(`(${searchValue})`, "gi"))
              .map((substring, index) =>
                substring.toLowerCase() === searchValue.toLowerCase() ? (
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
      <div>
        {searchValue ? (
          <p>
            {description
              .split(new RegExp(`(${searchValue})`, "gi"))
              .map((substring, index) =>
                substring?.toLowerCase() === searchValue?.toLowerCase() ? (
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
            <strong>Description:</strong>
            {description}
          </p>
        )}
      </div>
      <p className="m-0">Price:{price}</p>
      <p className="m-0">Delivey Time:{delivery_time}</p>
      {!isCart && <button className="btn" onClick={() => HandleCart(id)}>
        {inCart ? (
          <NavLink className="goTo-btn" to="/cart">
            Go to Cart
          </NavLink>
        ) : (
          "Add to Cart"
        )}
      </button>}
      {isCart && <>
      <div className="btn-box">
      <p className="btn-para">x{Selected}</p>
    <button className="btn w-30" onClick={()=>HandleCartItemsQuantity(id,false)}>+</button>
      <button className="btn w-30" onClick={()=>HandleCartItemsQuantity(id,true)}>-</button>
      </div>
      <button className="btn" onClick={() => HandleCart(id, true)}>
        Remove From Cart
      </button></>}
    </div>
  );
};

export default MenuDetails;
