import React, { useState } from "react";
import { useData } from "../Contexts/DataProvider";
import {
  BsCart4,
  AiOutlineHeart,
  AiFillHeart,
  BsCartX,
  RiDeleteBin5Line,
} from "../Icons/Icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [click, setClick] = useState(false);
  const {
    menuItem,
    HandleCart,
    HandleCartItemsQuantity,
    HandleWishList,
    ClearCart,
  } = useData();
  const cart = menuItem.filter(({ inCart }) => inCart);
  const totalDeliveryTime = cart.reduce(
    (acc, { delivery_time }) => acc + delivery_time,
    0
  );
  const totalCost = cart.reduce(
    (acc, { price, Selected }) => (acc += price * Selected),
    0
  );
  const notifyA = (msg) => toast(msg, { containerId: "A" });
  const notifyB = (msg) => toast(msg, { containerId: "B" });

  return (
    <>
      <ToastContainer
        enableMultiContainer
        containerId={"A"}
        position="bottom-right"
        autoClose={1000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <ToastContainer
        enableMultiContainer
        containerId={"B"}
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        {cart.length > 0 ? (
          <h1>
            Cart{" "}
            <span className="icon">
              <BsCart4 />
            </span>
          </h1>
        ) : (
          <>
            <div className="cart-page-logo">
              <BsCartX />
            </div>
            <h1>Your cart is currently empty.</h1>
          </>
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
                        onClick={() => {
                          HandleWishList(id);
                          notifyA("Removed From WhishList");
                        }}
                      />
                    ) : (
                      <AiOutlineHeart
                        className="cart-heart-icon"
                        title="WhishList"
                        onClick={() => {
                          HandleWishList(id);
                          notifyA("Added to WhishList");
                        }}
                      />
                    )}
                    <img src={image} alt="Not Available" />
                  </div>

                  <div className="cart-right">
                    <p>
                      <strong>{name}</strong>
                    </p>
                    <p>
                      <strong>Price:</strong>$ {price}
                    </p>
                    <p>
                      <strong>Delivery Time:</strong> {delivery_time}
                    </p>
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

                    <button
                      className="remove-btn btn"
                      onClick={() => {
                        notifyA("Removed From Cart");
                        HandleCart(id, true);
                      }}
                    >
                      <span className="icon">
                        <RiDeleteBin5Line />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-price-box">
            {cart.length > 0 ? (
              <>
                <h2>Price Details</h2>
                <h3>Total Delivery Time : {totalDeliveryTime} min.</h3>
                {click ? <h3>You Saved : $5</h3> : ""}
                <h3>Delivery Charge : $ 40</h3>
                <h3>
                  Total Cost : ${" "}
                  {click
                    ? (+totalCost + 35).toFixed(2)
                    : (+totalCost + 40).toFixed(2)}
                </h3>
                <button
                  disabled={click}
                  onClick={() => {
                    setClick(true);
                    notifyA("Coupon Applied");
                  }}
                  className="btn coupon"
                >
                  {click ? "Coupon Applied":"Apply Coupon"}
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    ClearCart();
                    notifyB("Thank You For Ordering");
                  }}
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
    </>
  );
};

export default Cart;
