import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Dashboard from "../components/Dashboard";

import AdminLogin from "../components/AdminPage/AdminLogin";
import UserSecurity from "../security/UserSecurity";
import AdminCategory from "../components/AdminPage/AdminCategory";
import AdminOrder from "../components/AdminPage/AdminOrder";
import AdminProduct from "../components/AdminPage/AdminProduct";
import ProductImage from "../components/AdminPage/ProductImage";
import OrderDetail from "../components/AdminPage/OrderDetail";
import UserHomePage from "../components/UserPage/UserHomePage";
import Register from "../components/UserPage/Register";
import ProductDetail from "../components/UserPage/ProductDetail";

import UserLogin from "../components/UserPage/UserLogin";
import UserOrder from "../components/UserPage/UserOrder";
import ProductCategory from "../components/UserPage/ProductCategory";




export const routes =
    <BrowserRouter>
        <ToastContainer />
        <Routes>            
            <Route path="/" element={<UserLogin/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dashboard" element={<Dashboard />}/>

            <Route path="/adminCategory" element={<AdminCategory />}/>                                                                                                                                                                                                                                                        
            <Route path="/adminProduct" element={<AdminProduct />}/>      
            <Route path='/productImage/:pid' element={<ProductImage />}  />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            <Route path="/adminOrder" element={<AdminOrder />}/>        
            <Route path="/orderDetail/:oid" element={<OrderDetail />}/>

            <Route path="/homePage" element={<UserHomePage />}/> 
            <Route path="/productDetail/:pid" element={<ProductDetail />}/>
            <Route path="/userOrders/:uid" element={<UserOrder />}/>
            <Route path="/category/:cid" element={<ProductCategory />}/>
            

            <Route path="/user" element={<UserSecurity component={<UserLogin/>}/>} />
            <Route path="/admin" element={<AdminLogin/>}/>
        </Routes>
    </BrowserRouter>