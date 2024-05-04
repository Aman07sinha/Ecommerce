import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePages from '../customer/pages/Homepage/HomePages';
import Cart from '../customer/Cart/Cart';
import Navigation from '../customer/components/navigation/Navigation';
import Footer from '../customer/components/Footers/Footer';
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import CheckOut from '../customer/components/checkout/CheckOut';
import Order from '../customer/components/order/Order';
import OrderDetails from '../customer/components/order/OrderDetails';

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation/>
            </div>
            <Routes>
                <Route path='/' element={<HomePages/>}/>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
                <Route path='/product/:productId' element={<ProductDetails/>}></Route>
                <Route path='/checkout' element={<CheckOut/>}/>
                <Route path='/account/order' element={<Order/>}/>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}/>
             
            </Routes>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default CustomerRouters;