import { useState,useEffect } from 'react'

import css from './App.module.css'
import Restaurants from './Components/Restaurants/Restaurants'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
// import Home from './Components/Home/Home'
import OrderOnline from './Components/OrderOnline/OrderOnline'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import CartModal from './Components/CartModal/CartModal'
// import DeliveryAddressContainer from './Components/CartContainer/test'
// import MainContainer from './Components/CartContainer/CheckoutContainer'
import Checkout from './Pages/Checkout/Checkout'
import Payment from './Pages/Payment/Payment'
import EmptyCart from './Pages/EmptyCart/EmptyCart'
import YourComponent from './Components/Test'
import OrderSuccess from './Pages/OrderSuccess/OrderSuccess'
import MyOrders from './Components/MyOrders/MyOrders'
import OrderOnlineSpecialty from './Components/OrderOnlineSpecialty/OrderOnlineSpecialty'
import OrderDetails from './Pages/OrderDetails/OrderDetails'
import MyAddresses from './Pages/MyAddresses/MyAdresses'
// import HomePageBanner from './Components/HomePageBanner/HomePageBanner'

function App() {

  useEffect(() => {
     // To ensure that the page always starts at the top when refreshed
     window.history.scrollRestoration = 'manual';

     // Scroll to the top
     window.scrollTo(0, 0);
 
     // Reset the scroll restoration to default after scrolling to the top
     return () => {
       window.history.scrollRestoration = 'auto';
     };
  },[])

  return (
    <Routes>
      
      <Route path="/" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/checkout' element={<Checkout />}></Route>
      <Route path="/restaurant/:id/:name" element={<Restaurants />} />
      <Route path='/order-success/:id' element = {<OrderSuccess />}></Route>
      <Route path="/payments" element={<Payment />} />
      <Route path='/cart' element={<CartModal />} />
      <Route path="/empty-cart" element ={<EmptyCart />} />
      <Route path='/test' element={<YourComponent />} />
      <Route path= '/my-orders' element = {<MyOrders />}></Route>
      <Route path= '/order-online/:name' element = {<OrderOnlineSpecialty />}></Route>
      <Route path= '/order-details/:id' element = {<OrderDetails />} ></Route>
      <Route path = '/my-addresses' element = {<MyAddresses />} ></Route> 
    </Routes>
  )
}

export default App
