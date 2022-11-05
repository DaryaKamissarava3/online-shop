import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import ProductsItem from "../ProductsItem/productsItem";
import Navigation from "../Navigation/navigation";
import './cart.css'
import CartProduct from "../CartProduct/cartProduct";

const Cart = () => {
  const productInformation = useSelector((state) => state.cartReducer.cart);
  console.log('it is from cart');
  console.log(productInformation)
  return (
    <>
      <Navigation blockTitle="black-title" classForNav="nav-link-black" fill="black"/>
    <div className="cart-container">
      {productInformation.map((item) =>
        (
            <CartProduct
              imgUrl={item.images[0]}
              name={item.name}
              type={item.type}
              price={item.price}
              color={item.color}
              availableSizes={item.availableSizes}
              description={item.description}
              key={item.id}
            />
        ))}
    </div>
    </>
  );
};

export default Cart;