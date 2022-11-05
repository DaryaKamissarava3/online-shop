import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetails from "../ProductDetails/productDetails";
import MainPage from "../MainPage/mainPage";
import SignIn from "../SignIn/signIn";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="products/:id" element={<ProductDetails />}/>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;