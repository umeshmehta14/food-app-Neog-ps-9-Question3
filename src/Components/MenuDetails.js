import React from "react";
import { useData } from "../Contexts/DataProvider";
import { useNavigate } from "react-router-dom";
import {
  BsCart4,
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiFillHeart,
} from "../Icons/Icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuDetails = ({ menu }) => {
  const navigate = useNavigate();
  const {
    HandleCart,
    filters: { searchValue },
    HandleWishList,
  } = useData();

  const {
    id,
    name,
    image,
    description,
    price,
    delivery_time,
    inCart,
    inWishList,
  } = menu;

  const notify = (msg) => toast(msg);

  return (
    <div key={id} className="menu-box">
      {inWishList ? (
        <AiFillHeart
          title="Remove WhishList"
          className="red heart-icon"
          onClick={() => {
            HandleWishList(id);
          notify("Removed From WhishList");
          }}
        />
      ) : (
        <AiOutlineHeart
          className="heart-icon"
          title="WhishList"
          onClick={() => {
            HandleWishList(id)
            notify("Added to WhishList");
          }}
        />
      )}
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
                <span key={index}>{substring}</span>
              )
            )}
        </p>
      ) : (
        <p>
          <strong>Description:</strong>
          {description}
        </p>
      )}
      <p>Price:{price} $</p>
      <p>Delivery Time:{delivery_time}</p>
      {inCart ? (
        <button
          className="btn"
          onClick={() => {
            HandleCart(id);
            navigate("/cart");
          }}
        >
          Go to Cart{" "}
          <span>
            <AiOutlineArrowRight />
          </span>
        </button>
      ) : (
        <button className="btn" onClick={() => {
          HandleCart(id);
          notify("Added To Cart");
          }}>
          Add to Cart{" "}
          <span className="icon">
            <BsCart4 />
          </span>
        </button>
      )}
      <ToastContainer
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
    </div>
  );
};

export default MenuDetails;
