


import React, { useState,useEffect,useRef} from 'react';
import { Tabs, Tab, Container, Row, Col, Button,Form, FormControl} from 'react-bootstrap';
import './Restaurants.css'; // Your CSS file for additional styling

import RestaurantsHeader from './RestaurantsHeader';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../Navbar/Navigation';
import '../OrderOnline/OrderOnline.css';
import FoodItems from './FoodItems';
import CategoryModal from '../CategoryModal/CategoryModal';
import Footer from '../Footer/Footer';

const Restaurants = () => {
  const {id} = useParams()
  const [categories,setCategories] = useState([])
  const [food,setFood] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(''); // State to keep track of selected category

  const [showFood,setShowFood] = useState([])
  
  const [showModal, setShowModal] = useState(false);

  const [vegChecked, setVegChecked] = useState(false);
  const [nonVegChecked, setNonVegChecked] = useState(false);
  const [filteredFood, setFilteredFood] = useState([])

  // ...other useEffect and logic

  const handleVegCheckboxChange = () => {
    setVegChecked(!vegChecked);
    if (nonVegChecked) setNonVegChecked(false);
  };

  const handleNonVegCheckboxChange = () => {
    setNonVegChecked(!nonVegChecked);
    if (vegChecked) setVegChecked(false);
  };


  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const base_url = `http://localhost:3000`

  
useEffect(() => {
  window.scrollTo(0,0)
},[])
 
   


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res  = await axios.get(`${base_url}/api/categories/${id}`)
        console.log(res)

        setCategories(res.data)
        setSelectedCategory(res.data[0]._id)

        
        console.log(selectedCategory)
      }catch(err) {
        console.log(err)
      }
    }
    fetchCategories()
  },[])

  
  useEffect(()=> {
    const fetchFood = async() => {
      try {
        const res = await axios.get(`${base_url}/api/food/${id}`)
        console.log(res)
        setFood(res.data)
        setShowFood(new Array(res.data.length).fill(true))
        console.log(food)
      }catch(err) {
        console.log(err)
      }
    }
    fetchFood()
  },[])
  
  var token = localStorage.getItem('token')

  useEffect(() => {
    let filteredItems = food;

    if (vegChecked && !nonVegChecked) {
      filteredItems = food.map((category) => ({
        ...category,
        items: category.items.filter((item) => item.isVeg)
      }))
      console.log(filteredItems)
    } else if (!vegChecked && nonVegChecked) {
      filteredItems = food.map((category) => ({
        ...category,
        items: category.items.filter((item) => !item.isVeg)
      }))
    }

    setFilteredFood(filteredItems);

    console.log(filteredFood)
  }, [food, vegChecked, nonVegChecked])
  
  
 
  const handleCategoryClick = async (category) => {
    await setSelectedCategory(category._id);
    

    
  };

  const toggleShowFood = (index) => {
    setShowFood(prevState => {
      const updatedShowFood = [...prevState];
      updatedShowFood[index] = !updatedShowFood[index]; // Toggle the visibility of the clicked category
      return updatedShowFood;
    })
  }

  return (
    <>
    <div className='zomato'>
    <div className="restaurant-page">
      <Navigation />
      <RestaurantsHeader />

      {/* Tabs for Overview, Order Online, Reviews */}
      <Container>
        <Tabs defaultActiveKey="order-online" id="restaurant-tabs" style={{marginBottom: "8px"}}>
          <Tab eventKey="overview" title="Overview">
            {/* Overview content */}
            <h4>Average Cost</h4>
            <p>$400 for two people (approx.)</p>
          </Tab>
          <Tab eventKey="order-online" title="Order Online">
            {/* Order Online content */}
            <Container>
              <Row>
                
                <Col xs={12}>
                <div className='checkboxes'>
                <label style={{ display: 'flex', alignItems: 'center', marginRight: '20px', cursor:"pointer"}}>
                <span><img src="https://5.imimg.com/data5/SELLER/Default/2023/1/FC/HP/EV/74736417/plain-barcode-labels.jpeg" alt="" className='label-img' /></span>
    <span>Veg</span>

    <input
      type='checkbox'
      checked={vegChecked}
      onChange={() => handleVegCheckboxChange('veg')}
      style={{ marginLeft: '5px',cursor:"pointer" }}
    />
  </label>
  <label style={{ display: 'flex', alignItems: 'center',cursor:"pointer"}}>
  <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png" alt="" className='label-img' /></span>
    <span>Non-Veg</span>
  
    <input
      type='checkbox'
      checked={nonVegChecked}
      onChange={() => handleNonVegCheckboxChange('nonVeg')}
      style={{ marginLeft: '5px',cursor:"pointer"}}
    />
  </label>
      </div>
                  {/* Items based on cuisine selected */}
                  <div className="cuisine-items" style={{marginTop:"24px"}}>
                    
                     {filteredFood.map((category,index) => (
                      <>
                    <div key={category._id} className={selectedCategory === category._id ? 'show' : 'hide'} style = {{marginBottom:"20px"}}>
                      <div className='food-item-header-container' 
                      onClick={() => toggleShowFood(index)}
                      
                      >
                     <div className="category-name-container">
                      <h3 style={{fontSize: "20px",fontWeight:"700",textAlign:"center"}}>{category.category} ({category.items.length})</h3> 
                      </div> 
                      <div  style={{marginTop:"24px",marginBottom:"24px"}}>
                       {showFood[index] ? (
                       <img src="https://www.pngall.com/wp-content/uploads/6/Caret-Symbol-Transparent.png"  className="carrot"alt="" /> 
                       
                       ): <img src="https://static.thenounproject.com/png/3629699-200.png" className="carrot" alt="" /> } 
                      </div>
                      </div>
                      {showFood[index] && category.items.map((item) => (
                        <>
                        <div key={item._id} className="food-item">
                        
                          <FoodItems item={item} /> 
                        </div>
                        
                        </>
                      ))}
                      
                    </div>
                    <div style={{backgroundColor:"grey",height:"0.5px", marginBottom:"20px"}}>
                        
                    </div>
                    </>
                    ))}
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="reviews" title="Reviews">
            {/* Reviews content */}
            <p>Reviews section content goes here.</p>
          </Tab>
        </Tabs>
      </Container>
    </div>
    
    <div className='fixed-button'>
<button onClick={() => handleShowModal() }>Browse Menu</button>
    </div>
   
    </div>
    <Footer />
    </>
  );
};

export default Restaurants;






