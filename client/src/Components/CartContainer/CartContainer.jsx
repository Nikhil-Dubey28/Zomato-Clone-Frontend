// CartContainer.js
import React,{useState,useEffect} from 'react';
import './CartContainer.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext';

const CartContainer = ({cart,total,restaurant}) => {
  // Static data for cart items
//  const [cart,setCart] = useState([])
//  const [restaurant,setRestaurant] = useState([])
// const [total,setTotal] = useState(0)
// const {contextCart,setContextCart} = useCart()

const navigate = useNavigate()
const {selectedAddress,setSelectedAddress} = useCart()


//  useEffect(() => {
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
// setContextCart(res.data.cart)
// console.log(contextCart)
// setRestaurant(res.data.restaurant)
// setTotal(res.data.totalCost)
// console.log(cart)
//     }catch(err) {
// console.log(err)
//     }
//   }
//   getCart()
//  },[])

const handleProceedToPay = () => {
  // selectedAddress == null ? alert('Please select an address') : navigate('/payments')
  if(selectedAddress) {
    navigate('/payments')
    setSelectedAddress(null)
  }else {
    alert('Please select an address')
  }
}

  return (
<>
    <div className="cart-container mt-4">
      {/* Header section */}
      <div className="cart-header" onClick={() => navigate(`/restaurant/${restaurant.id}/${restaurant.name}`)}>
        <div className="restaurant-info">
          <img src={restaurant.img} alt="Restaurant Logo" className="restaurant-logo" />
          <h4 className="restaurant-name">{restaurant.name}</h4>
        </div>
      </div>
      
    
      {/* Body section */}
      <div className="cart-body">
        {/* <h4>Your Cart</h4> */}
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div style={{display:"flex"}}> 
              {item.isVeg ? (
                <span><img src="https://5.imimg.com/data5/SELLER/Default/2023/1/FC/HP/EV/74736417/plain-barcode-labels.jpeg" alt="" className='label-img' style={{marginTop:"-2px"}} /></span>
              ):   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png" alt="" className='label-img' style={{marginTop:"3px"}} /> }
              <p>{item.foodItemName} x {item.quantity}</p>
              </div>
              <p>₹{item.price}</p>
            </div>
          ))}
          
          
        </div>
        <div className='bill-total'>
            <h6 style={{fontWeight:"500"}}>Bill Details</h6>
        </div>
        <div className="billing">
          <p style={{fontWeight:"300"}}>Item Total:</p>
          <p style={{fontWeight:"300"}}>₹{total}</p>
         
        </div>
        <div className="billing">
          <p style={{fontWeight:"300"}}>Platform Fee:</p>
          <p style={{fontWeight:"300"}}>₹3</p>
         
        </div>
        <div className="billing">
          <p style={{fontWeight:"300"}}>GST and Restaurant Charges:</p>
          <p style={{fontWeight:"300"}}>₹50</p>
         
        </div>
        <div style={{backgroundColor:"black",height:"1px", marginBottom:"20px"}}>

        </div>
      </div>
        {/* Total amount */}
        <div className="cart-total">
          <p>To Pay:</p>
          <p>₹{total + 3 + 50}</p>
        </div>
        {(
          <div className='pay-button' onClick={() =>handleProceedToPay() }>
          <button style={{backgroundColor:"#60b246",outline:"none"}}>PROCEED TO PAY</button>
    </div>
        )}
      
    </div>
    </>
  );
};

export default CartContainer;
