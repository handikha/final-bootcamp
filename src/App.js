import Navbar from "./components/Navbar";
import users from "./json/users.json";
import { useState } from "react";
import LandingPage from "./pages/landing-page";
import { Route, Routes } from "react-router-dom";
import UploadRecipe from "./pages/user/upload-recipe";
import AllProducts from "./pages/user/all-products";
import Product from "./pages/user/product";
import Cart from "./pages/user/cart";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./pages/user/profile";

function App() {
  const user = users.find((data) => data.id === 1);

  // LOGIN HANDLER
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Navbar user={user} isLogin={isLogin} setIsLogin={setIsLogin} />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/upload-recipe" element={<UploadRecipe />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
