// import React, { useState } from 'react';
// import './Payment.css'; // Import your custom CSS file

// const Payment = () => {
//   const [cashChecked, setCashChecked] = useState(false);
//   const [onlineChecked, setOnlineChecked] = useState(false);

//   const handleCashCheckbox = () => {
//     setCashChecked(!cashChecked);
//     if (!cashChecked) {
//       setOnlineChecked(false);
//     }
//   };

//   const handleOnlineCheckbox = () => {
//     setOnlineChecked(!onlineChecked);
//     if (onlineChecked) {
//       setCashChecked(false);
//     }
//   };

//   return (
//     <div className="main-container">
//       <div className="header-section">
//         <h1 className="title">Payment Options</h1>
//         <p className="item-info">1 item • Total: ₹374</p>
//       </div>
//       <div className="body-section">
//         <div className="delivery-info">
//           <p className="bold-text">Taco Bell | Delivery in: 76 mins</p>
//           <p className="muted-text">
//             <span className="bold-text">Home 2</span> | 297-b,first Floor,janta Flats,block-n,
//             sarita Vihar, Near Bikaner Sweets, 237a, Pocket N
//           </p>
//         </div>
//         <div className="payment-method">
//           <h2 className="payment-heading">Choose a payment method</h2>
//           <div className="card-container">
//             <div className="payment-card">
//               <img src="path_to_small_image" alt="Pay on Delivery" className="small-image" />
//               <div className="payment-details">
//                 <h3 className="payment-title">Pay on Delivery</h3>
//                 <p className="muted-text">Pay cash at time of delivery</p>
//                 {cashChecked && (
//                   <button className="payment-button">Pay ₹374 with cash</button>
//                 )}
//               </div>
//               <input
//                 type="checkbox"
//                 checked={cashChecked}
//                 onChange={handleCashCheckbox}
//                 className="checkbox"
//               />
//             </div>
//             <div className="payment-card">
//               <img src="path_to_small_image" alt="Pay Online" className="small-image" />
//               <div className="payment-details">
//                 <h3 className="payment-title">Pay Online</h3>
//                 {onlineChecked && (
//                   <button className="payment-button">Pay ₹374 online</button>
//                 )}
//               </div>
//               <input
//                 type="checkbox"
//                 checked={onlineChecked}
//                 onChange={handleOnlineCheckbox}
//                 className="checkbox"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;
import React,{useState,useEffect} from 'react'
import Navigation from '../../Components/Navbar/Navigation'
import PaymentContainer from '../../Components/PaymentContainer/PaymentContainer'
import {useCart} from '../../CartContext.jsx'

const Payment = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <div className='zomato'>
            <Navigation />
            <div className='main-container' style={{ display: "flex", maxWidth: "1200px", height: "100vh",marginTop:"120px" }}>
              <PaymentContainer />
            </div>
        </div>
  )
}

export default Payment
