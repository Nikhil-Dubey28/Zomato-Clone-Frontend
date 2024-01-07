import React,{useState,useEffect} from 'react'
import { Nav, Navbar, NavDropdown, Tabs, Tab, Form, FormControl, InputGroup, Button, Carousel, Card, Modal, Row, Col } from 'react-bootstrap';
import { useCart } from '../../CartContext.jsx';
import axios from 'axios'
import Navigation from '../Navbar/Navigation.jsx';

const CartModal = ({ quantity}) => {
    const {cartCount, setCartCount} = useCart()
    
    const [cart,setCart] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        const getCart = async() => {
            try {

                const token = localStorage.getItem('token')
                const res = await axios.get(`http://localhost:3000/api/cart`,{
                    headers: {
                        Authorization : token
                    }
                })
                console.log(res)
                setCart(res.data.cart)
                console.log(cart)
            }catch(err) {

                console.log(err)
            }
        }
        getCart()
    },[])
    
    return (
        <>
   
        <Modal show={true} onHide={handleClose} className="cart-modal">
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <h1>Items in your cart : </h1>
               
            </Modal.Body>
        </Modal>
        </>
    )
}

export default CartModal