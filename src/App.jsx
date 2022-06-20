import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from "framer-motion";
// import { Provider as ReduxProvider } from "react-redux";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import UpdateUser from "./pages/Profile/UpdateUser";
import ForgotPassword from "./pages/ForgotPassword";
import ProductDetail from "./pages/ProductDetail";
import ErrorPages from "./pages/ErrorPages";
import IsLogin from "./pages/IsLogin";
import Payment from "./pages/Payment";
import History from "./pages/History";
import ScrollToTop from "./component/ScrollToTop";
import DashboardAdmin from "./pages/DashbordAdmin";
import AddProduct from "./component/Admin/AddProduct";
import AddPromo from "./component/Admin/AddPromo";
import AdminProduct from "./pages/DashbordAdmin/Products";
import Store from "./redux/store";

const token = localStorage.getItem("token");

function App() {
  return (
    <ReduxProvider store={Store}>
    <AnimatePresence exitBeforeEnter>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="*" element={<ErrorPages />} />
          <Route path="/islogin" element={<IsLogin />} />
          <Route
            path="/login"
            element={token ? <Navigate replace to="/products" /> : <Login />}
          />
          <Route
            path="/signup"
            element={token ? <Navigate replace to="/islogin" /> : <Signup />}
          />          
          <Route
            path="/profile/edit"
            element={!token ? <Navigate replace to="/login" /> : <UpdateUser />}
          />
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
            path="/admin/addpromo"
            element={!token ? <Navigate replace to="/login" /> : <AddPromo />}
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
  </ReduxProvider>
  );
}

export default App;
