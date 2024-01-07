import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Navigation from '../../Components/Navbar/Navigation'

const EmptyCart = () => {

    const navigate = useNavigate()
  return (
    <div className='zomato'>
        <Navigation />
    <>
    <div className='main-container' style={{ display: "flex", maxWidth: "1200px", height: "80vh",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"120px" }}>
        <div>
        <img src="https://media.istockphoto.com/vectors/wok-icon-trendy-wok-logo-concept-on-white-background-from-kitchen-vector-id1127328080?k=6&m=1127328080&s=170667a&w=0&h=PvWqt2GGpQsZ7IqoK8i85mcvd_maYEQR_ENspk3Gb4w=" alt=""
        style={{height:"300px", }}
        />
        </div>
        <div>
        <h3>Your cart is empty</h3>
        </div>
        <div>
        <Button style={{marginTop:"50px"}} onClick={() => navigate('/')}>Explore Restaurant Options</Button>
        </div>
    </div>
        </>
        </div>
  )
}

export default EmptyCart