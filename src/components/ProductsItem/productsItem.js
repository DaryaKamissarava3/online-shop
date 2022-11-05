import React from 'react';
import Picture from "../Picture/picture";
import './productItem.css'

const ProductsItem = ({name, price, imgUrl}) => {
  return (
    <div className="card-item">
      <span className="like-note">
        <svg width="40" height="40" viewBox="0 0 62 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M43.7409 0C40.8623 0 38.1109 0.659911 35.5635 1.96153C33.8295 2.84739 32.2365 4.02439 30.8697 5.42084C29.5027 4.02439 27.9099 2.84739 26.1758 1.96153C23.6283 0.659911 20.8771 0 17.9984 0C8.07411 0 0 8.07411 0 17.9985C0 25.0277 3.71238 32.4934 11.0339 40.1882C17.147 46.6131 24.6313 51.9687 29.8333 55.3303L30.8697 56L31.906 55.3303C37.108 51.9689 44.5923 46.6131 50.7056 40.1882C58.0271 32.4934 61.7393 25.0277 61.7393 17.9985C61.7393 8.07411 53.6652 0 43.7409 0ZM47.9389 37.5557C42.4755 43.2976 35.8207 48.179 30.8697 51.4459C25.9187 48.1788 19.2638 43.2976 13.8006 37.5557C7.17717 30.5948 3.81893 24.0148 3.81893 17.9985C3.81893 10.1799 10.1799 3.81893 17.9985 3.81893C22.4999 3.81893 26.6349 5.88662 29.343 9.49169L30.8697 11.524L32.3963 9.49169C35.1045 5.88662 39.2395 3.81893 43.7409 3.81893C51.5595 3.81893 57.9204 10.1799 57.9204 17.9985C57.9204 24.0148 54.562 30.5948 47.9389 37.5557Z"
            fill="white"/>
        </svg>
      </span>
      <Picture
        imageUrl={imgUrl}
        name={name}
      />
      <div className="product-cost">
        <div className="product-currency">{price.currency}</div>
        <div className="product-currency-value"> $ {price.value}</div>
      </div>
    </div>
  );
};

export default ProductsItem;