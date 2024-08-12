import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Login from "./pages/Login";
import AppLayout from "./UI/AppLayout";
import SignUp from "./pages/SignUp";
import Contact from "./pages/contact";
import Account from "./pages/Account";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import { ProductProvider } from "./context/ProductContext";
import CheckOut from "./pages/CheckOut";
import AllProducts from "./pages/AllProducts";
import WishList from "./pages/WishList";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./UI/ScrollToTop";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="contact" element={<Contact />} />
            <Route path="About" element={<About />} />
            <Route path="account" element={<Account />} />
            <Route path="home" element={<HomePage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="allproducts" element={<AllProducts />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="productDetails" element={<ProductDetails />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
