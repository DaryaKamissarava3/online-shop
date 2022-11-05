import React from 'react';
import './bagButton.css';

const BagButton = ({inf}) => {
  console.log(inf)

  return (
    <button
      className="add-to-bag-button"
    >
      ADD TO BAG
    </button>
  );
};

export default BagButton;