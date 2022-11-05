import React from 'react';
import './cartProduct.css';

const CartProduct = ({name, price, imgUrl,description,availableSizes,color}) => {
  return (

      <div className="cart-inner">
        <div className="cart-images ">
          <div>
            <img src={imgUrl} className="cart-img" alt="img"/>
          </div>
        </div>
        <div className="cart-item-description">
          <div className="cart-description">{description}</div>
          <div className="prod-price">
            <span className="prod-price-currency">{price.currency}</span>
            $
            <span>{price.value}</span>
          </div>

          <div>
            COLOR
            <div className="prod-color-square" style={{
              backgroundColor: `${color.hex}`,
            }}/>
          </div>
          <div className="prod-sizes">{availableSizes}</div>
        </div>

    </div>
  );
};

export default CartProduct;