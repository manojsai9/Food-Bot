import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Ct from "./Ct";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Getprod = () => {
  let [products, setProd] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();
  let obj = useContext(Ct);
  const location = useLocation();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/getprod`).then((res) => {
      setProd(res.data);
    });
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search");
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
  }, [location.search]);

  let addcart = (prodobj) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/addcart`,
        {
          uid: obj.state._id,
          pid: prodobj._id,
          pimg: prodobj.pimg,
          price: prodobj.price,
          name: prodobj.name,
          qty: 1,
        },
        { headers: { Authorization: obj.state.token } }
      )
      .then(() => {
        toast.success("Item added to cart!");
        setTimeout(() => {
          navigate("/api/getprod");
        }, 2100);
      })
      .catch(() => {
        toast.error("Failed to add item to cart!");
      });
  };

  let knowmore = (prodobj) => {
    obj.updstate({ proddet: prodobj });
    navigate("/km");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <ToastContainer />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for Food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="restaurant-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="restaurant-card">
              <img src={`${process.env.REACT_APP_API_URL}/prdimg/${product.pimg}`} alt="product" />
              <h5>{product.name}</h5>
              <p>Category: {product.cat}</p>
              <p>Price: ₹{product.price}</p>
              {obj.state.token !== "" && (
                <button onClick={() => addcart(product)}>Add to Cart</button>
              )}
              <button onClick={() => knowmore(product)}>Know more</button>
            </div>
          ))
        ) : (
          <p className="no-results">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Getprod;
