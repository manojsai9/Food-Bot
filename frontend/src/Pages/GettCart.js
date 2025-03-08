import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Ct from "./Ct";
import Checkout from "./Checkout";

const GettCart = () => {
  const [cart, setCart] = useState([]);
  const [ctotal, setCtotal] = useState(0);
  const obj = useContext(Ct);
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (!obj.state?._id) {
      navigate("/api/login");
      return;
    }

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/gettcart/${obj.state._id}`, {
        headers: { Authorization: obj.state.token },
      })
      .then((res) => {
        setCart(res.data);
        obj.updstate({ cartlength: res.data.length });

        const total = res.data.reduce((acc, item) => acc + item.qty * item.price, 0);
        setCtotal(total);
      })
      .catch((err) => console.error("Error fetching cart:", err));
  }, [obj.state._id, refresh, navigate, obj]);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div className="cart-content">
          <h5>🛒 Cart Total: ₹{ctotal}</h5>
          <Checkout ctotal={ctotal} currentUser={obj.state} cartItems={cart} />
        </div>
      )}
    </div>
  );
};

export default GettCart;