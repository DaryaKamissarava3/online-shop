import React, {useState} from 'react';
import './bagButton.css';
import allActions from "../../redux/actions";
import {useDispatch} from "react-redux";


const BagButton = ({inf}) => {
  const dispatch = useDispatch();
console.log(inf)
  const addToCart = () => {
    dispatch(allActions.cartActions.addToCart(inf));
  };

  return (
    <>
      <button
        className="add-to-bag-button"
        onClick={addToCart}
      >
        ADD TO BAG
      </button>
    </>
  );
};

export default BagButton;