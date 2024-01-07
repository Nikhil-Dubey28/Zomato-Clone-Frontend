import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import './OrderSuccess.css'
import { useCart } from '../../CartContext';
import { useParams,useLocation } from 'react-router-dom';



const OrderSuccessHeader = ({restaurant,address}) => {
const {id} = useParams()
const location = useLocation()

const isOrderDetailsPage = location.pathname.includes('order-details');


  return (
    <div style={{display:"flex",flexDirection:"column",padding:"4px 20px"}}>
    {!isOrderDetailsPage && <div className='order-placed-container' style={{padding:"4px 20px"}}>
    <div className='order-placed'style={{display:"flex",alignItems:"center"}}>
    <h1>Order Placed</h1>
    <span
      style={{ borderRadius: "50%", backgroundColor: "#60b246", color: "white", paddingTop:"3px", paddingBottom: "4px", paddingRight: "4px", paddingLeft: "4px", marginLeft: "24px",marginTop:"-5px" }}>
      
      <CheckIcon />
    </span>
    </div>
    
    <p>Your order has been placed successfully.</p>
    </div>}
    <div className='order-success-header-container'>
      <div className='order-id'>
        <h3>Order #{id}</h3>
      </div>
      <div className='order-success-header-body'>
          <div style={{marginBottom:"20px",display:"flex",alignItems:"center"}}>
        <span><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="" style={{width:"30px",hieght:"30px"}}/></span>
        <div>
          <h3>{restaurant}</h3>
          </div>
          </div>
          
            <div style={{marginBottom:"20px",display:"flex",alignItems:"center"}}>
          <span><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="" style={{width:"30px",height:"30px"}}/></span>
          <div style={{display:"flex",flexDirection:"column",marginTop:"17px"}}>
          <h3>{address.addressTitle}</h3>

       
          <div style={{marginTop:"-10px"}}>
          <p>{address.flat}, {address.area}, {address.city}, {address.state} {address.pincode}</p>
          </div>
          </div>
            </div>
          <div className='order-date' style={{display:"flex",alignItems:"center"}}>
          {/* <span
      style={{ borderRadius: "50%", backgroundColor: "#60b246", color: "white", paddingTop:"3px", paddingBottom: "4px", paddingRight: "4px", paddingLeft: "4px" }}>
      
      <CheckIcon />
    </span> */}
    Wed, Dec 6, 2023, 03:58 PM

          </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSuccessHeader