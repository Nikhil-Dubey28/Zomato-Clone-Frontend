import React ,{useState,useEffect}from 'react'

import { Tabs, Tab, Container, Row, Col, Button } from 'react-bootstrap';
import './Restaurants.css'; // Your CSS file for additional styling


import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';

import '../OrderOnline/OrderOnline.css';
import {useCart} from '../../CartContext.jsx'


const FoodItems = (props) => {
    const {setCartCount} = useCart()
    const {id} = useParams()

    const user = JSON.parse(localStorage.getItem('user'))
    const item = props.item
    

    const [quantity, setQuantity] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [cartItem, setCartItem] = useState([])
    var token = localStorage.getItem('token')


    const base_url = `http://localhost:3000`
   useEffect(() => {

       const getItemQuantity = async(id) => {
           try {
            

               const res = await axios.get(`${base_url}/api/cart/quantity/${id}`,{
                headers:{
                    Authorization : token
                }
               })
               console.log(res)
               setQuantity(res.data.quantity)
               if(res.data.quantity == undefined) {
                   return 0
               }
               console.log(res.data.quantity)
               return res.data.quantity
           }catch(err) {
               console.log(err)
           }
       }
       getItemQuantity(item._id)
   },[])



const handleAdd = async(foodId) => {
 try  {
    
    const token = localStorage.getItem('token')
    console.log(id)
    const res = await axios.post(`${base_url}/api/cart/add/${foodId}/${id}`,{
        userId : user.id,
        quantity: quantity + 1 ,
        price : item.price,
    },{
        headers: {
            Authorization:token
        }
    })
    setQuantity((prev) => prev + 1)
   setCartCount((prev) => prev + 1)
    setCartItem(res.data)
    console.log(res)
    // getItemQuantity2(item._id)
 }catch(err){
    console.log(err)
    if(err.response.status === 401) {
        alert('please login to continue')
    }
 }
}

const handleRemove = async(id) => {
try {
const res = await axios.put(`${base_url}/api/cart/remove/${id}`,{
    quantity: quantity - 1,
    price : item.price,
},{
    headers: {
        Authorization : token
    }
})
console.log(res)
setQuantity((prev) => prev - 1)
setCartCount((prev) => prev - 1)
updateCartCount(totalQuantity - 1)
    setCartItem(res.data)
}catch(err){
    console.log(err)
}
}
    
  return (
    <div className="food-info" style={{display:"flex"}}>
                          <div className="food-image">
                            <img src={item.image} alt={item.name} style={{borderRadius: "5px"}} />
                          </div>
                          <div className="food-details" style={{marginLeft:"20px",marginBottom:"20px"}}>
                         <div  className="name-and-label" style={{ display: "flex", alignItems: "center" }}>
                            {item.isVeg ? (
                               <span><img src="https://5.imimg.com/data5/SELLER/Default/2023/1/FC/HP/EV/74736417/plain-barcode-labels.jpeg" alt="" className='label-img' style={{marginTop:"-10px"}} /></span> 
                            ): 
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png" alt="" className='label-img' style={{marginTop:"-5px"}} />
                            }
                            <h3>{item.name}</h3>
                            </div>
                            <p>₹{item.price}</p>
                            <p>{item.description}</p>
                            {quantity === 0 ?  
                            <Button style={{marginBottom: "10px"}} onClick={() => handleAdd(item._id)}>Add to cart</Button>
                        : (
                            <div>
                            <Button style={{ marginRight: "10px" }} onClick={() => handleRemove(item._id)}>-</Button>
                            <span>{quantity}</span>
                            <Button style={{ marginLeft: "10px" }} onClick={() => handleAdd(item._id)}>+</Button>
                          </div>
                        )
                        }
                          </div>
                        </div>
  )
}

export default FoodItems