import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Product from "../Compenents/Product";
import { DarkModeContext } from "../Context/DarkModeContex";
function Home() {
  const [products, setProducts] = useState([]);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios("data.json");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div
      className={
        darkMode
          ? `flex flex-wrap justify-around bg-slate-800`
          : `flex flex-wrap justify-around  bg-white`
      }
    >
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Home;
