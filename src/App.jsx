import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Homepage/Home.jsx";

import Cart from "./pages/Cart";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound"; // Optional: 404 page
import Footer from "./components/Footer.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import SignIn from "./pages/Login/SignIn.jsx";
import SignUp from "./pages/Login/SignUp.jsx";
import Profile from "./pages/Login/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ProductPage from "./pages/ProductPage.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/productpage" element={<ProductPage />} />
          {/* 🔐 Protected */}
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />{" "}
          <Route path="*" element={<NotFound />} /> {/* Optional 404 route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
