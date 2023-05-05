import React, { useState } from "react";
import { useData } from "../Contexts/DataProvider";
// import MenuDetails from "../Components/MenuDetails";
import { BsCart4, AiOutlineHeart, AiFillHeart } from "../Icons/Icons";

const Cart = () => {
  const [click, setClick] = useState(false);
  const { menuItem, HandleCart, HandleCartItemsQuantity, HandleWishList } =
    useData();
  const cart = menuItem.filter(({ inCart }) => inCart);
  const totalDeliveryTime = cart.reduce(
    (acc, { delivery_time }) => acc + delivery_time,
    0
  );
  const totalCost = cart
    .reduce((acc, { price, Selected }) => (acc += price * Selected), 0);
  return (
    <div>
      <div className="container">
        {cart.length > 0 ? (
          <h1>
            Cart{" "}
            <span className="icon">
              <BsCart4 />
            </span>
          </h1>
        ) : (
          <h1>Your Cart is Empty 😑</h1>
        )}
        <div className="cart-container">
          <div className="cart-details">
            {cart.map((menu) => {
              const {
                id,
                name,
                image,
                price,
                delivery_time,
                Selected,
                inWishList,
              } = menu;
              return (
                <div key={id} className="menu-box-horizontal">
                  <div className="cart-left">
                    {inWishList ? (
                      <AiFillHeart
                        title="Remove WhishList"
                        className="red cart-heart-icon"
                        onClick={() => HandleWishList(id)}
                      />
                    ) : (
                      <AiOutlineHeart
                        className="cart-heart-icon"
                        title="WhishList"
                        onClick={() => HandleWishList(id)}
                      />
                    )}
                    <img src={image} alt="Not Available" />
                  </div>

                  <div className="cart-right">
                    <p>
                      <strong>{name}</strong>
                    </p>
                    <p><strong>Price:</strong>$ {price}</p>
                    <p><strong>Delivery Time:</strong> {delivery_time}</p>
                    <div className="quantity-box">
                      <strong>Quantity:</strong>
                      <span className="btn-box">
                        <button
                          className="quantity-btn br"
                          onClick={() => HandleCartItemsQuantity(id, false)}
                        >
                          +
                        </button>
                        <span className="btn-para">{Selected}</span>

                        <button
                          className="quantity-btn bl"
                          onClick={() => HandleCartItemsQuantity(id, true)}
                        >
                          -
                        </button>
                      </span>
                    </div>

                    {Selected <= 1 ? (
                      ""
                    ) : (
                      <button
                        className="btn w-90"
                        onClick={() => HandleCart(id, true)}
                      >
                        Remove From Cart
                        <span className="icon">
                          <BsCart4 />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-price-box">
            {cart.length > 0 ? (
              <>
                <h2>Price Details</h2>
                <h3>Total Delivery Time :  {totalDeliveryTime} min.</h3>
                {click ? <h3>You Saved :  $5</h3> : ""}
                <h3>Delivery Charge :  $ 40</h3>
                <h3>Total Cost :  $ {click ? (+ totalCost + 35 ).toFixed(2) : (+totalCost + 40).toFixed(2)}</h3>
                <button
                  disabled={click}
                  onClick={() => setClick(true)}
                  className="btn coupon"
                >
                  Apply Coupon
                </button>
                <button
                  className="btn"
                >
                  Place Order
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
