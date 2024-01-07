import React, { useEffect, useState } from 'react';
import './DeliveryAddress.css'; // Import your custom CSS file for styling
import CheckIcon from '@mui/icons-material/Check';
import { Button } from 'react-bootstrap';
import AddressModal from '../AddressModal/AddressModal';
import axios from 'axios'
import { useCart } from '../../CartContext';
import SavedAddressCard from './SavedAddressCard';
import NewAddressCard from './NewAddressCard';
import SelectedAddressCard from './SelectedAddressCard';
import { useLocation } from 'react-router-dom';



const DeliveryAddressContainer = () => {                              
    

    const {refresh,setRefresh} = useCart()
    const {selectedAddress,setSelectedAddress} = useCart()
    
    const [addressToEdit, setAddressToEdit] = useState(null);
    const [editMode, setEditMode] = useState(false)
    
    const [savedAddresses, setSavedAddresses] = useState([]);
    // const [selectedAddress, setSelectedAddress] = useState(null);
    const [showSavedAddresses, setShowSavedAddresses] = useState(true);
    
    const token = localStorage.getItem('token');

    const location = useLocation()

    const isCheckoutPage = location.pathname.includes('checkout')   
    
    
    
    // Function to handle changing the address
    const handleChangeAddress = () => {
        setSelectedAddress(null);
        setShowSavedAddresses(true);
    };

    

const[showModal, setShowModal] = useState(false)

const handleShowModal = () => setShowModal(true)
const handleCloseModal = () => setShowModal(false) 


const base_url = `http://localhost:3000`

// const address = localStorage.getItem('selectedAddress');
// console.log(address)
useEffect(() => {
    const getAddress = async() => {
        try{
            const token = localStorage.getItem('token');
            const res = await axios.get(`${base_url}/api/address`,{
                headers: {
                    Authorization: token
                }
            });
            console.log(res.data)
            setSavedAddresses(res.data)
            console.log('Saved addresses:', savedAddresses);
        }catch(err) {
console.log(err)
// if(err.response.staus == 404) {
//     setSavedAddresses([])
// }
        }
    }
    getAddress()
},[refresh])


// Function to handle selecting an address
const handleSelectAddress = (address) => {
    if(isCheckoutPage) {

        setSelectedAddress(address);
        setShowSavedAddresses(false);
        // Save the selected address in local storage
        localStorage.setItem('selectedAddress', JSON.stringify(address));
    }else {
        return 
    }
    
};

const handleEdit = (address) => {
    setAddressToEdit(address)
    setEditMode(true)
    setShowModal(true)
}

const handleDelete = async(id) => {
    const res = await axios.delete(`${base_url}/api/address/${id}`,{
        headers: {
            Authorization : token
        }
    })

    console.log(res) 

    if(res.status == 200) {
        // alert ('Address deleted successfully')
        const updatedSavedAddress = savedAddresses.filter(address => address._id != id)
        setSavedAddresses(updatedSavedAddress)
        setRefresh((prev) => !prev)
    }
}

const handleSaveAddress = async(addressData) => {
    // Logic to save the address data
    try {
        if(editMode) {
            const res = await axios.put(`${base_url}/api/address`,{
                addressId : addressData._id,
                addressTitle : addressData.addressTitle,
                flat : addressData.flat,
                area : addressData.area,
                landmark : addressData.landmark,
                city : addressData.city,
                state : addressData.state,
                pincode : addressData.pincode,
            },{
                headers: {
                    Authorization: token
                }
            });
            console.log(res)
            console.log('Address data to be saved:', addressData);
    
            if(res.status === 200){
                alert('Address saved successfully')
                setRefresh((prev) => !prev)
            }
            setEditMode(false);
            setAddressToEdit(null);
            setShowModal(false); // Close the modal after saving
        }else{

            const res = await axios.post(`${base_url}/api/address`,{
                addressTitle : addressData.addressTitle,
                flat : addressData.flat,
                area : addressData.area,
                landmark : addressData.landmark,
                city : addressData.city,
                state : addressData.state,
                pincode : addressData.pincode,
            },{
                headers: {
                    Authorization: token
                }
            });
            console.log(res)
            console.log('Address data to be saved:', addressData);
    
            if(res.status === 201){
                alert('Address saved successfully')
                setRefresh((prev) => !prev)
            }
            setShowModal(false); // Close the modal after saving
        }


    }catch(err){
        console.log(err)
    }
};



    return (
        <>

            <div className="container mt-4">
                <div className="card">
                    {showSavedAddresses  ? (
                        <div className="card-body">
                          {isCheckoutPage ? (
                          <h2 className="card-title">Choose a Delivery Address</h2>) : 
                          <h2 className="card-title">Manage Addresses</h2> 
                          
                          }
                            <div className="row">
                                {savedAddresses.length > 0 && savedAddresses.map((address) => (
                                    <SavedAddressCard key={address.id}
                                     address={address} 
                                     handleSelectAddress={handleSelectAddress} 
                                     handleEdit = {handleEdit} 
                                     handleDelete  = {handleDelete}/>
                                ))}

                                <NewAddressCard handleShowModal={handleShowModal}/>
                                <AddressModal 
                                show={showModal}
                                handleClose={handleCloseModal}
                                handleSave={handleSaveAddress}
                                editMode = {editMode}
                                addressToEdit = {addressToEdit}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="card-body">
                            <div className="row">
                                <SelectedAddressCard selectedAddress={selectedAddress} handleChangeAddress={handleChangeAddress} />
                                <div className="col-md-4 d-flex align-items-center justify-content-end">
                                    <button className="btn btn-primary change-address-button" onClick={handleChangeAddress}>
                                        Change
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>


        </>
    );
};

export default DeliveryAddressContainer;
