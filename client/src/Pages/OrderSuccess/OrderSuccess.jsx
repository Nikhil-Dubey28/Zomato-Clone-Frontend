import React,{useState,useEffect} from 'react'
import Navigation from '../../Components/Navbar/Navigation'
import './OrderSuccess.css'
// import OrderSuccessComponent from '../../Components/OrderSuccess/OrderSuccessComponent'
import OrderSuccessBody from '../../Components/OrderSuccess/OrderSuccessBody'
import OrderSuccessHeader from '../../Components/OrderSuccess/OrderSuccessHeader'
import axios from 'axios'
import { useCart } from '../../CartContext'
import {useParams} from 'react-router-dom'


const OrderSuccess = () => {
  const [cart,setCart] = useState([])
    const [restaurant,setRestaurant] = useState([])
    const [address,setAddress] = useState({})
   const [total,setTotal] = useState(0)
   const [orderInfo, setOrderInfo] = useState([])
   const {id} = useParams()


   const base_url = `http://localhost:3000`

  

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   const getCart = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:3000/api/cart',{
  //         headers:{
  //           Authorization : token
  //         }
  //       })
  //       console.log(res.data)

  
  // setCart(res.data.cart)
  // setRestaurant(res.data.restaurant)
  // setTotal(res.data.totalCost)
  // console.log(cart)
  //     }catch(err) {
  // console.log(err)
  //     }
  //   }
  //   getCart()
  //  },[])

  useEffect(() => {
    const token = localStorage.getItem('token')
    const fetchOrder  = async() => {
      try {
        const res = await axios.get(`${base_url}/api/order/${id}`,{
          headers:{
            Authorization: token
          }
        })

        console.log(res)
        setCart(res.data.cart)
        setRestaurant(res.data.restaurant.restaurantName)
        setAddress(res.data.address)
        console.log(address)
        console.log(orderInfo)
      }catch(err) {
console.log(err)
      }
    }
    fetchOrder()
  },[])
  return (
    <div className='zomato'>
            <Navigation />
            <div className='main-container' style={{ display: "flex", maxWidth: "800px", height: "100vh",marginTop:"120px",flexDirection:"column",alignItems:"center"}}>

              
              
    <div className='order-success-main-container' style={{display:"flex",flexDirection:"column",width:"100%",padding:"20px 20px" }}>
      <OrderSuccessHeader restaurant = {restaurant} address={address}/>
    <div style={{padding: "20px 20px"}}>

      <OrderSuccessBody cart={cart} total={total} />
    </div>
    </div>
      
              
            </div>
        </div>
  )
}

export default OrderSuccess