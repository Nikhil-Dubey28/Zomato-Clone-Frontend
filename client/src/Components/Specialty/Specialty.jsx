import React from 'react'
import './Specialty.css'
import { useNavigate, useNavigation } from 'react-router-dom'

const Specialty = () => {

    const navigate = useNavigate()

    const specialty = [
        {
            id: 1,
            name: "Biryani",
            img: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
        },
        {
            id: 2,
            name: "Burger",
            img: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
        },
        {
            id: 3,
            name: "Pizza",
            img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
        },
        {
            id: 4,
            name: "Noodles",
            img: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
        },
        {
            id: 5,
            name: "North Indian",
            img: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
        },
        {
            id: 6,
            name: "Paratha",
            img: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
        },
        {
            id: 7,
            name: "Bowl",
            img: "https://b.zmtcdn.com/data/dish_photos/77e/2ae6744ff2b0595d69a65c91672bf77e.jpeg"
        }
    ]
    return (
        <div className='specialty-main'>
            <div className='specialty-header'>
                <h1>Eat what makes you happy</h1>
            </div>
            <div className='specialty-rows' >
               {specialty.map((item) => (

                
               <div className='specialty-row' key={item.id} onClick={() => navigate(`/order-online/${item.name}`)}>
                        <img src={item.img} alt="" classsName="specialty-row-img"/>
                        <p >{item.name}</p>
                    </div>
               ))} 
                    {/* <div className='specialty-row'>
                        <img src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" alt="" classsName="specialty-row-img"/>
                        <p>Burger</p>
                    </div>
                    <div className='specialty-row'>
                        <img src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="" classsName="specialty-row-img"/>
                        <p>Pizza</p>
                    </div>
                    <div className='specialty-row'>
                        <img src="https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png" alt="" classsName="specialty-row-img"/>
                        <p>Noodles</p>
                    </div>
                    <div className='specialty-row'>
                        <img src="https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg" alt="" classsName="specialty-row-img"/>
                        <p>North Indian</p>
                    </div>
                
                    <div className='specialty-row'>
                        <img src="https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png" alt="" classsName="specialty-row-img"/>
                        <p>Paratha</p>
                    </div>
                    <div className='specialty-row'>
                        <img src="https://b.zmtcdn.com/data/dish_photos/77e/2ae6744ff2b0595d69a65c91672bf77e.jpeg" alt="" classsName="specialty-row-img"/>
                        <p>Bowl</p>
                    </div> */}
                    
                    
                </div>
        </div>
    )
}

export default Specialty