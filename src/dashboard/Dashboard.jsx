import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/productCard/ProductCard";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [itemId, setItemId] = useState(null);
  const userId = JSON.parse(localStorage.getItem("jwt_token")).split(".")[1];
  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    setProducts(data.products);
  };
  const fetchCartDetails = async (id) => {
    const { data } = await axios.get(
      `https://6ac6467fbea0e72cf5c8ccd4.mockapi.io/cart`,
    );
    setCart(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchCartDetails();
  }, [itemId]);

  const addtoCart = async (item) => {
    if (cart.length === 0) {
      const obj = {
        userId: userId,
        itemsId: [item.id],
      };
      const { data } = await axios.post(
        "https://6ac6467fbea0e72cf5c8ccd4.mockapi.io/cart",
        obj,
      );
      console.log(data);
      toast.success("Item is added successfully");
    } else {
      const currentUserCart = cart.find((item) => item.userId === userId);
      if (!currentUserCart) {
        const obj = {
          userId: userId,
          itemsId: [item.id],
        };
        const { data } = await axios.post(
          "https://6ac6467fbea0e72cf5c8ccd4.mockapi.io/cart",
          obj,
        );
        console.log(data);
        toast.success("Item is added successfully");
      } else {
        const newObj = {
          ...currentUserCart,
          itemsId: [...currentUserCart.itemsId, item.id],
        };
        const {data}=await axios.put(`https://6ac6467fbea0e72cf5c8ccd4.mockapi.io/cart/${currentUserCart.id}`,newObj)
        toast.success("Item is added successfully");
      }
    }
    setItemId(item.id);
  };


  
  return (
    <div className="w-screen h-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-4 place-items-center">
        {products.map((product) => {
          return (
            <Fragment>
              <ProductCard product={product} addtoCart={addtoCart} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
