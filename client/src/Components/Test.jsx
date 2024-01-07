import React, { useState, useEffect, useRef } from 'react';

const YourComponent = () => {
  const categories = ['Burgers', 'Pizzas', 'Desserts']; // Static categories
  const foodItems = [
    { category: 'Burgers', items: ['Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger',] },
    { category: 'Pizzas', items: ['Margherita', 'Pepperoni','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger',] },
    { category: 'Desserts', items: ['Chocolate Cake', 'Ice Cream','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger','Veggie Burger', 'Cheeseburger',]},
  ]; // Static food items corresponding to categories

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const categoriesRef = useRef([]);
  const foodItemsRef = useRef([]);

  useEffect(() => {
    categoriesRef.current = categoriesRef.current.slice(0, foodItems.length);
    foodItemsRef.current = foodItemsRef.current.slice(0, foodItems.length);
  }, [foodItems, categories]);

  const handleCategoryClick = (category) => {
    const index = categories.indexOf(category);
    if (index !== -1 && foodItemsRef.current[index]) {
      foodItemsRef.current[index].scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedCategory(category);
  };

  const handleScroll = () => {
    let currentCategory = '';
    foodItemsRef.current.forEach((foodItem, index) => {
      if (foodItem.getBoundingClientRect().top <= 0) {
        currentCategory = categoriesRef.current[index].innerText;
      }
    });
    if (currentCategory && selectedCategory !== currentCategory) {
      setSelectedCategory(currentCategory);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 30%', borderRight: '1px solid #ccc', padding: '10px' }}>
        <h3>Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleCategoryClick(category)}
              style={{
                cursor: 'pointer',
                backgroundColor: selectedCategory === category ? 'lightblue' : 'transparent',
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{ flex: '1', padding: '10px', overflowY: 'scroll', maxHeight: '400px' }}
        onScroll={handleScroll}
      >
        {foodItems.map((foodItem, index) => (
          <div key={index}>
            <h3 ref={(el) => (categoriesRef.current[index] = el)}>{foodItem.category}</h3>
            <ul ref={(el) => (foodItemsRef.current[index] = el)}>
              {foodItem.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
