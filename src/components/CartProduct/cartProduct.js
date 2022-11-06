import React, {useEffect, useState} from 'react';
import './cartProduct.css';
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux/actions";

const CartProduct = ({cartItem}) => {

  const dispatch=useDispatch();

  const removeItem=()=>{
    dispatch(allActions.cartActions.removeFromCart(cartItem));
  };

  const imageURL = cartItem.images[0].toString();

  return (
    <>
      <div className="cart-inner">
        <div className="cart-images ">
          <div>
            <img src={imageURL} className="cart-img" alt="img"/>
          </div>
        </div>
        <div className="cart-item-description">
          <div className="cart-description">{cartItem.description}</div>
          <div className="prod-price">
            <span className="prod-price-currency">{cartItem.price.currency}</span>
            $
            <span>{cartItem.price.value}</span>
          </div>

          <div>
            COLOR
            <div className="prod-color-square" style={{
              backgroundColor: `${cartItem.color.hex}`,
            }}/>
          </div>
          <div className="cart-sizes">{cartItem.availableSizes}</div>

          <button
            style={{color: "grey"}}
            onClick={removeItem}
          >
            REMOVE
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProduct;