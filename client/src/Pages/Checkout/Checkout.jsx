import React,{useEffect,useState} from 'react'
// import DeliveryAddressContainer from './test'
// import CartContainer from './CartContainer'
// import '../OrderOnline/OrderOnline.css'
// import Navigation from '../Navbar/Navigation'
import CartContainer from '../../Components/CartContainer/CartContainer'
import Navigation from '../../Components/Navbar/Navigation'
import DeliveryAddress from '../../Components/DeliveryAddress/DeliveryAddress'
import './Checkout.css'
import { useCart } from '../../CartContext'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Checkout = () => {
    const {contextCart,setContextCart} = useCart()
    const [cart,setCart] = useState([])
    const [restaurant,setRestaurant] = useState([])
   const [total,setTotal] = useState(0)
    
    const navigate = useNavigate()
    
    const base_url = `http://localhost:3000`

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
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        const getCart = async () => {
          try {
            const res = await axios.get(`${base_url}/api/cart`,{
              headers:{
                Authorization : token
              }
            })
            console.log(res.data)
    
      
      setCart(res.data.cart)
      setRestaurant(res.data.restaurant)
      setTotal(res.data.totalCost)
      console.log(cart)
          }catch(err) {
      console.log(err)
          }
        }
        getCart()
       },[])
    return (
        <div className='zomato'>
            <Navigation />
            <div className='main-container' style={{ display: "flex", maxWidth: "1200px", height: "100vh",marginTop:"120px" }}>
                <DeliveryAddress />
                <CartContainer cart={cart} total={total} restaurant={restaurant} />
            </div>
            
        </div>
    )
}

export default Checkout