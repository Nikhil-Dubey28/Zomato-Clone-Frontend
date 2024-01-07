import React from 'react'
import DeliveryAddress from '../../Components/DeliveryAddress/DeliveryAddress'
import Navigation from '../../Components/Navbar/Navigation'
const MyAddresses = () => {
  return (
    <div className='zomato'>
            <Navigation />
            <div className='main-container' style={{ display: "flex", maxWidth: "1200px", height: "100vh",marginTop:"120px" }}>
                <DeliveryAddress />
                {/* <CartContainer cart={cart} total={total} restaurant={restaurant} /> */}
            </div>
            
        </div>
  )
}

export default MyAddresses 




