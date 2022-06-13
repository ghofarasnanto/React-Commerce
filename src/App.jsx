import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from "framer-motion";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SearchPage from "./pages/Products/SearchPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import UpdatePage from "./pages/Profile/UpdatePage";
import ForgotPassword from "./pages/ForgotPassword";
import ProductDetail from "./pages/ProductDetail";
import ErrorPages from "./pages/ErrorPages";
import IsLogin from "./pages/IsLogin";
import Payment from "./pages/Payment";
import History from "./pages/History";
import ScrollToTop from "./component/ScrollToTop";
import DashboardAdmin from "./pages/DashbordAdmin";
import AddProduct from "./component/Admin/AddProduct";
import AdminProduct from "./pages/DashbordAdmin/Products";

const token = localStorage.getItem("token");

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile/:id" element={<UpdatePage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="*" element={<ErrorPages />} />
          <Route
            path="/login"
            element={token ? <Navigate replace to="/products" /> : <Login />}
          />
          <Route
            path="/signup"
            element={token ? <Navigate replace to="/islogin" /> : <Signup />}
          />
          <Route path="/islogin" element={<IsLogin />} />
          <Route
            path="/profile"
            element={!token ? <Navigate replace to="/login" /> : <Profile />}
          />

          <Route
            path="/payment"
            element={!token ? <Navigate replace to="/login" /> : <Payment />}
          />
          <Route
            path="/history"
            element={!token ? <Navigate replace to="/login" /> : <History />}
          />
          <Route
            path="/admin"
            element={
              !token ? <Navigate replace to="/login" /> : <DashboardAdmin />
            }
          />
          <Route
            path="/admin/addproduct"
            element={!token ? <Navigate replace to="/login" /> : <AddProduct />}
          />
          <Route
            path="/admin/product"
            element={
              !token ? <Navigate replace to="/login" /> : <AdminProduct />
            }
          />
          
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
