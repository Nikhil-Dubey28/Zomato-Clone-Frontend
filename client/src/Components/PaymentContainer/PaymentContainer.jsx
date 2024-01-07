import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './PaymentContainer.css'; // Import your custom CSS file
import axios from 'axios'
import {useCart} from '../../CartContext'



import { useNavigate} from 'react-router-dom'


const PaymentContainer = () => {


  const navigate = useNavigate()
  
  const {cartCount,setCartCount} = useCart()
  const{orderId,setOrderId} = useCart()
  const [total,setTotal] = useState(0)
  const [amount,setAmount] = useState(0)
  const [restaurant,setRestaurant] = useState({})
  
  
  const token = localStorage.getItem('token')
  
  const address = JSON.parse(localStorage.getItem('selectedAddress'))

  useEffect(() => {
    const getTotalCartQuantity = async() => {

      try {
      
        const res = await axios.get(`http://localhost:3000/api/cart/quantity`,{
          headers: {
            Authorization : token
          }
        })
        console.log(res.data)
        setCartCount(res.data.quantity)
        setTotal(res.data.total)
        
        setRestaurant(res.data.restaurant)
      }catch(err) {
console.log(err)
      }
    }

    getTotalCartQuantity()
  },[])

  const [cashChecked, setCashChecked] = useState(false);
  const [onlineChecked, setOnlineChecked] = useState(false);



  const handleCashCheckbox = () => {
    
    
    setCashChecked(!cashChecked); 
    setOnlineChecked(false);
    
  };

  const handleOnlineCheckbox = () => {
    
    
    setOnlineChecked(!onlineChecked); 
    setCashChecked(false);
  };

  console.log(address)

  const handlePayOnDelivery = async () => {
    try {
      let paymentMode = ''

      if(cashChecked) {
        paymentMode = 'cash'
      } 
      if(onlineChecked) {
        paymentMode = 'online'
      }

     

      const res = await axios.post(`http://localhost:3000/api/order`,{
        paymentMode,
        addressId: address._id
      },{
        headers :{
          Authorization: token
        }
      })
      console.log(res)
      const createOrderId = res.data.newOrder._id
      setOrderId(createOrderId)
     console.log(createOrderId)

     navigate(`/order-success/${createOrderId}`)

    }catch(err) {
      console.log(err)
    }
  }


  const handleOnlinePayment = async (amount) => {
    try {
        amount += 53
      
      const {data: {key}} = await axios.get("http://localhost:3000/api/getkey")

      const response = await axios.post("http://localhost:3000/api/checkout", {
        amount
    },{
      headers: {
        Authorization: token
      }
    })
    console.log(response)
    const createOrderId = response.data.newOrder._id

    const {data: {order}} = response

    const userString = localStorage.getItem('user')
    const user = JSON.parse(userString)
    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: user.name,
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

      handler: async function (response) {



        const res = await axios.post('http://localhost:3000/api/updateTransactionStatus', {
          order_id: options.order_id,
          payment_id: response.razorpay_payment_id,
          signature_id: response.razorpay_signature_id,
        }, { headers: { Authorization: token } })


        navigate(`/order-success/${createOrderId}`)
      },

      
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        "color": "#3399cc"
      }
    };
    const razor = new window.Razorpay(options);


    razor.open();


    // razor.on('payment.failed', function (response) {
    //   console.log(response)
    //   alert('something went wrong')
    // })
  
   
    }catch(err){
console.log(err)
    }
  }
  return (
    <Container className="main-container" style={{ maxWidth: '1200px' }}>
      <div className="header-section">
        <h1 className="title">Payment Options</h1>
        <p className="item-info">{cartCount} items • Total: ₹{total + 53}</p>
      </div>
      <div className="body-section">
        <Row className="delivery-info">
          <Col>
            <p className="bold-text">{restaurant.name} | Delivery in: 36 mins</p>
            <p className="muted-text">
              <span className="bold-text">{address.addressTitle}</span> | {address.flat},{address.area},{address.landmark},
              {address.city},{address.state},{address.pincode}
            </p>
          </Col>
        </Row>
        <Row className="payment-method">
          <Col>
            <h2 className="payment-heading">Choose a payment method</h2>
            <Card className="payment-card">
              <Card.Body>
                <Row>
                  <Col xs={2}>
                    <img src="path_to_small_image" alt="" className="small-image" />
                  </Col>
                  <Col xs={7}>
                    <Card.Title className="payment-title">Pay on Delivery</Card.Title>
                    <Card.Text className="muted-text">Pay cash at time of delivery</Card.Text>
                    {cashChecked && (
                      <>
                    
                      <Button variant="success" className="payment-button" onClick = {() => handlePayOnDelivery(total)}>
                        Pay ₹{total + 53} with cash
                      </Button>
                      </>
                    )}
                  </Col>
                  <Col xs={3} className="d-flex align-items-center justify-content-end">
                    <Form.Check
                      type="checkbox"
                      checked={cashChecked}
                      onChange={() => handleCashCheckbox()}
                      className="checkbox"
                     
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="payment-card">
              <Card.Body>
                <Row>
                  <Col xs={2}>
                    <img src="path_to_small_image" alt="" className="small-image" />
                  </Col>
                  <Col xs={7}>
                    <Card.Title className="payment-title">Pay Online</Card.Title>
                    {onlineChecked && (
                      <Button variant="success" className="payment-button" onClick={() => handleOnlinePayment(total)}>
                          Pay ₹{total + 53} online
                      </Button>
                    )}
                  </Col>
                  <Col xs={3} className="d-flex align-items-center justify-content-end">
                    <Form.Check
                      type="checkbox"
                      checked={onlineChecked}
                      onChange={() => handleOnlineCheckbox()}
                      className="checkbox"
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default PaymentContainer;
