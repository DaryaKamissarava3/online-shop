import React from 'react';
import { useSelector} from "react-redux";
import Navigation from "../Navigation/navigation";
import CartProduct from "../CartProduct/cartProduct";
import './cart.css';

const Cart = () => {

  const productInformation = useSelector((state) => state.cartReducer.cart);
  console.log('it is from cart');
  console.log(productInformation)

  return (
    <>
      <Navigation blockTitle="black-title" classForNav="nav-link-black" fill="black"/>
      <div className="cart-container">
        <div className="cart-title">
          <span className="cart-title-text">BAG</span>
          <span className="cart-count">({productInformation.length})</span>
        </div>
        {productInformation.map((item) =>
          (
            <CartProduct
              cartItem={item}
              key={item.id}
            />
          ))}

        <button className="btn-checkout">PROCEED TO CHECKOUT</button>
      </div>
    </>
  );
};

export default Cart;