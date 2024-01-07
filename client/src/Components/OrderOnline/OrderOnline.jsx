import React, {useState,useEffect,useRef} from 'react';
import { Nav, Navbar, NavDropdown, Tabs, Tab, Form, FormControl, InputGroup, Button,Carousel, Card, Modal,Row,Col} from 'react-bootstrap';
import './OrderOnline.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navigation from '../Navbar/Navigation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Specialty from '../Specialty/Specialty';

const OrderOnline = () => {
    const [showModal, setShowModal] = useState(false);
    const [restaurants,setRestaurants] = useState([])
    const [sortBy, setSortBy] = useState('rating'); // Default sort by rating
    const [sortOrder, setSortOrder] = useState('desc'); // Default ascending order

    const base_url = `http://localhost:3000`

    const navigate = useNavigate();
  

    useEffect(() => {
      window.scrollTo(0,0)
    },[])

    useEffect(() => {
      const fetchRestaurants = async() => {
        try {

          const res = await axios.get(`${base_url}/api/restaurants`, {
            params : {sortBy, sortOrder}
          })
          setRestaurants(res.data)
          console.log(res.data)
        }catch(err) {
          console.log(err)
        }
      }
      fetchRestaurants()
    },[sortBy,sortOrder])
    
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleSortChange = (selectedSortBy, selectedSortOrder) => {
      setSortBy(selectedSortBy);
      setSortOrder(selectedSortOrder);
    };
    
    return (
<>
        <div className="zomato">
           <Navigation />
            <Tabs defaultActiveKey="delivery" id="zomato-tabs" className="tabs-container">


                <Tab eventKey="delivery" title={<span className="tab-title"><img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" alt="Delivery Icon" className="delivery-icon" /> Delivery</span>} className='tab-delivery'>

                    <div className="delivery-tab">
                        {/* <Button variant="btn-outline"className='btn btn-outline-secondary' style={{padding:"10px", borderRadius:"5px", fontSize:"1rem", width:"100px"}} onClick={handleShowModal}>Filters</Button> */}
          <div>
      <Specialty />
            <div className='filter-container'>
        <label style={{fontSize: "20px"}}>Sort By:</label>
        <select value={sortBy} onChange={(e) => handleSortChange(e.target.value, sortOrder)} style={{marginLeft:"10px", borderRadius:"5px", padding:"5px",marginRight:"20px", fontSize: "20px"}}>
          <option value="rating">Rating</option>
          <option value="name">Name</option>
          <option value="cost">Cost</option>
          {/* Add more options if needed */}
        </select>

        <label style={{fontSize: "20px"}}>Sort Order:</label>
        <select value={sortOrder} onChange={(e) => handleSortChange(sortBy, e.target.value)} style={{marginLeft:"10px", borderRadius:"5px", padding:"5px", fontSize: "20px"}}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        </div>
      </div>
                        <h2 className="delivery-heading">Order Food Online</h2>
                        <div className="restaurants">
                        {restaurants.map((restaurant)=> (

                            <div className="restaurant-card" key={restaurant._id}>
                                <img src={restaurant.image} alt="Restaurant 1" className="restaurant-image" />
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                <h2 className="restaurant-name" style={{fontWeight: "500"}}>{restaurant.name}</h2>
                                <p className="restaurant-rating">{restaurant.rating}</p>

                                </div>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                  <div style={{display:"flex"}}>
                                {restaurant.cuisine.map((item,index) => (
                                  <>
                                  <p className='restaurant-cuisine'> {item} {index !== restaurant.cuisine.length - 1 ? ',' : ''}</p>
                                  
                                  </>
                                 
                                  ))}
                                  </div>
                                <p className="restaurant-price">{restaurant.averageCost} for one</p>
                                </div>
                                <Button variant="primary" onClick={() => navigate(`/restaurant/${restaurant._id}/${restaurant.name}`)}>Order Now</Button>
                            </div>
                        ))}
                        {restaurants.map((restaurant)=> (

<div className="restaurant-card" key={restaurant._id}>
    <img src={restaurant.image} alt="Restaurant 1" className="restaurant-image" />
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <h2 className="restaurant-name" style={{fontWeight: "500"}}>{restaurant.name}</h2>
    <p className="restaurant-rating">{restaurant.rating}</p>

    </div>
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <p className='restaurant-price'>Specialty</p>
    <p className="restaurant-price">{restaurant.averageCost} for one</p>
    </div>
    <Button variant="primary" onClick={() => navigate(`/restaurant/${restaurant._id}/${restaurant.name}`)}>Order Now</Button>
</div>
))}{restaurants.map((restaurant)=> (

  <div className="restaurant-card" key={restaurant._id}>
      <img src={restaurant.image} alt="Restaurant 1" className="restaurant-image" />
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <h2 className="restaurant-name" style={{fontWeight: "500"}}>{restaurant.name}</h2>
      <p className="restaurant-rating">{restaurant.rating}</p>

      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <p className='restaurant-price'>Specialty</p>
      <p className="restaurant-price">{restaurant.averageCost} for one</p>
      </div>
      <Button variant="primary" onClick={() => navigate(`/restaurant/${restaurant._id}/${restaurant.name}`)}>Order Now</Button>
  </div>
))}
                           
                        </div>
                       
                    </div>
                </Tab>
                <Tab eventKey="dining-out" title={<span className="tab-title"><img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" alt="Dining" className="delivery-icon" /> Dining</span>}>
                    Dining Out content
                </Tab>
            </Tabs>

            <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Filter options */}
          <Row>
            {/* Left column - Filter Options */}
            <Col>
              <p>Sort By:</p>
              {/* Add more filtering options as needed */}
              <p>Rating</p>
            </Col>
            {/* Right column - Sorting Options */}
            <Col>
              <Form.Group>
                <Form.Check
                  type="radio"
                  label="Cost: High to Low"
                  name="sortOptions"
                  id="sortByCostHighToLow"
                  // Add onChange handlers to handle sorting option selection
                />
                <Form.Check
                  type="radio"
                  label="Rating: High to Low"
                  name="sortOptions"
                  id="sortByRatingHighToLow"
                  // Add onChange handlers to handle sorting option selection
                />
                {/* Add more sorting options */}
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        {/* Modal footer with apply button */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      <Footer />
        </>
    );
};

export default OrderOnline;