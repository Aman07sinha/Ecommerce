
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './customer/Cart/Cart';
import Footer from './customer/components/Footers/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import CheckOut from './customer/components/checkout/CheckOut';
import OrderSummary from './customer/components/checkout/OrderSummary';
import Navigation from './customer/components/navigation/Navigation';
import Order from './customer/components/order/Order';
import OrderDetails from './customer/components/order/OrderDetails';
import HomePages from './customer/pages/Homepage/HomePages';
import CustomerRouters from './routers/CustomerRouters';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
