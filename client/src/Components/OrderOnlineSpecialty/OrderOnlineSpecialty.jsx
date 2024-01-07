import React, { useState, useEffect } from 'react'
import '../OrderOnline/OrderOnline.css'
import Navigation from '../Navbar/Navigation'
import Footer from '../Footer/Footer'
import './OrderOnlineSpecialty.css'

import { Nav, Navbar, NavDropdown, Tabs, Tab, Form, FormControl, InputGroup, Button,Carousel, Card, Modal,Row,Col} from 'react-bootstrap';

import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const OrderOnlineSpecialty = () => {

  const { name } = useParams()

  const [restaurants, setRestaurants] = useState([])
  const [sortBy, setSortBy] = useState('rating'); // Default sort by rating
  const [sortOrder, setSortOrder] = useState('asc'); // Default ascending order


  useEffect(() => {
    const fetchRestaurants = async () => {
      try {


        const res = await axios.get(`http://localhost:3000/api/restaurants/specialty/${name}`, {
          params: { sortBy, sortOrder }
        })
        console.log(res)
        setRestaurants(res.data)
      } catch (err) {

      }
    }
    fetchRestaurants()
  }, [sortOrder,sortBy])


  const handleSortChange = (selectedSortBy, selectedSortOrder) => {
    setSortBy(selectedSortBy);
    setSortOrder(selectedSortOrder);
  };


  return (
    <>
      <div className="zomato">
        <Navigation />
              <div className='delivery-tab'>
        <h1 style={{fontSize: "32px", fontWeight:"500",marginTop:"150px",marginBottom: "90px"}}>{name}</h1>
                <div className='filter-container'>
                  <label style={{ fontSize: "20px" }}>Sort By:</label>
                  <select value={sortBy} onChange={(e) => handleSortChange(e.target.value, sortOrder)} style={{ marginLeft: "10px", borderRadius: "5px", padding: "5px", marginRight: "20px", fontSize: "20px" }}>
                    <option value="rating">Rating</option>
                    <option value="name">Name</option>
                    {/* Add more options if needed */}
                  </select>

                  <label style={{ fontSize: "20px" }}>Sort Order:</label>
                  <select value={sortOrder} onChange={(e) => handleSortChange(sortBy, e.target.value)} style={{ marginLeft: "10px", borderRadius: "5px", padding: "5px", fontSize: "20px" }}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
              
                <div>
              <h2 className="delivery-heading">Restaurants to explore</h2>
              </div>
              <div className="specialty-restaurants">
                {restaurants.map((restaurant) => (

                  <div className="specialty-restaurant-card" key={restaurant._id}>
                    <img src={restaurant.image} alt="Restaurant 1" className="restaurant-image" />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <h2 className="restaurant-name" style={{ fontWeight: "500" }}>{restaurant.name}</h2>
                      <p className="restaurant-rating">{restaurant.rating}</p>

                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <p className='restaurant-price'>Specialty</p>
                      <p className="restaurant-price">{restaurant.averageCost} for one</p>
                    </div>
                    <Button variant="primary" onClick={() => navigate(`/restaurant/${restaurant._id}/${restaurant.name}`)}>Order Now</Button>
                  </div>
                ))}
                

              </div>
              </div>
            
              </div>
    



      <Footer />
    </>
  )
}

export default OrderOnlineSpecialty