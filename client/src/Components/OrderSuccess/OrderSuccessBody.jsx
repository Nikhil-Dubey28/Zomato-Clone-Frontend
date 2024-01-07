import React from 'react'

const OrderSuccessBody = ({cart,total,restaurant}) => {
  return (
    <div>
       {/* Body section */}
       <div className="order-cart-body">
        {/* <h4>Your Cart</h4> */}
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item._id} className="cart-item">
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
    </div>
  )
}

export default OrderSuccessBody