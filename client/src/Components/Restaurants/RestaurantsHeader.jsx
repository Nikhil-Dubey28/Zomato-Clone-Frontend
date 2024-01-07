import React, {useEffect,useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RestaurantsHeader = () => {

  const [restaurant, setRestaurant] = useState([]);
  const {id} = useParams()
  
  const base_url = `http://localhost:3000`

  useEffect(() => {
    const fetch = async () => {
        try{
          const res = await axios.get(`${base_url}/api/restaurants/${id}`)

          console.log(res)
          setRestaurant(res.data)
        }catch(err) {
          console.log(err)
        }
    }
    fetch()
  },[])



  return (
    <Container className='restaurant-header'>
    {/* Images of the restaurant */}
    <Container>
    <Row>
      <Col>
        <img src={restaurant.image} alt="Restaurant" style={{ width: "50%", height: "400px" }} />
        <img src={restaurant.image} alt="Restaurant" style={{ width:  "50%", height: "400px" }} />
      </Col>
    </Row>
  </Container>

  {/* Restaurant Name, Rating, Open hours */}
  <Container>
    <Row>
      <Col xs={6}>
        <h1>{restaurant.name}</h1>
      </Col>
      <Col xs={6} style={{display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "10px"}}>
        <h2 className='rating'> <span>{restaurant.rating}</span></h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>Open now</p>
        <p>11am – 12midnight (Today)</p>
      </Col>
    </Row>
  </Container>
  </Container>
  )
}

export default RestaurantsHeader