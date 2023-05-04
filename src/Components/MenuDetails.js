import React from "react";
import { useData } from "../Contexts/DataProvider";
import { useNavigate } from "react-router-dom";
import { BsCart4,AiOutlineArrowRight } from '../Icons/Icons';

const MenuDetails = ({ menu, isCart }) => {
  const navigate = useNavigate();
  const {
    HandleCart,
    filters: { searchValue },
    HandleCartItemsQuantity,
  } = useData();

  const {
    id,
    name,
    image,
    description,
    price,
    delivery_time,
    inCart,
    Selected,
  } = menu;

  return (
    <div key={id} className="menu-box">
      <img src={image} alt="Not Available" />
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
        {searchValue ? (
          <p>
            <strong>Description:</strong>
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
      <p >Price:{price} $</p>
      <p >Delivey Time:{delivery_time}</p>
      {!isCart ? inCart ? (
        <button
          className="btn"
          onClick={() => {
            HandleCart(id);
            navigate("/cart");
          }}
        >
          Go to Cart <span><AiOutlineArrowRight/></span>
        </button>
      ) : (
        <button className="btn" onClick={() => HandleCart(id)}>
          Add to Cart <span className="icon"><BsCart4/></span>
        </button>
      ):""}
      {isCart && (
        <>
          <div className="btn-box">
            <p className="btn-para">x{Selected}</p>
            <button
              className="btn w-30"
              onClick={() => HandleCartItemsQuantity(id, false)}
            >
              +
            </button>
            <button
              className="btn w-30"
              onClick={() => HandleCartItemsQuantity(id, true)}
            >
              -
            </button>
          </div>
          {Selected <= 1 ? (
            ""
          ) : (
            <button className="btn" onClick={() => HandleCart(id, true)}>
              Remove From Cart
           <span className="icon"><BsCart4/></span>

            </button>
          )}
        </>
      )}
    </div>
  );
};

export default MenuDetails;
