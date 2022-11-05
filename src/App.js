import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn/signIn";
import MainPage from "./components/MainPage/mainPage";
import ProductDetails from "./components/ProductDetails/productDetails";
import './styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="products/:id" element={<ProductDetails />}/>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
