import React, {useState} from 'react';
import './bagButton.css';
import allActions from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";


const BagButton = ({inf}) => {
  console.log(inf);

  const dispatch = useDispatch();

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