import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="main-box">
      <div className="home">
        
        <h2>
          UNLIMITED MEDIUM <span>PIZZAS</span>
        </h2>
        <h4>Medium 2-topping* pizza</h4>
        <div>*Additional charge for premium toppings. Minimum of 2 required.</div>
        <button className="btn" onClick={() => navigate("/menu")}>
          Explore Menu
        </button>
        <h3>$12.99 <div>$19.99</div></h3>
      </div>
    </div>
  );
};

export default Home;
