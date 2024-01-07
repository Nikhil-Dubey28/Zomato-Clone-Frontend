import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddressModal = ({ show, handleClose, handleSave,editMode,addressToEdit }) => {
    const [addressData, setAddressData] = useState({
        addressTitle: '',
        flat: '',
        area: '',
        landmark: '',
        city: '',
        state: '',
        pincode: ''
        // Other address-related fields
    });


    useEffect(() => {
        if(editMode && addressToEdit) {
            setAddressData(addressToEdit);
        }
    }, [editMode, addressToEdit])

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(e.target.value)
        setAddressData({ ...addressData, [name]: value });
    };

    const handleSaveAddress = (e) => {
        // Add validation logic if needed before saving
        e.preventDefault()
        handleSave(addressData);
        setAddressData({
            addressTitle: '',
            flat: '',
            area: '',
            landmark: '',
            city: '',
            state: '',
            pincode: ''
        });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? 'Edit Address' : 'Add New Address'}</Modal.Title>
                <div style={{display: "flex", justifyContent: "center",marginLeft:"44px"}}>
                    {/* <div style={{display:"flex",justifyContent:"center",backgroundColor:"black",borderRadius:"5px",padding:"10px"}}>
                    <Button variant="outlined" type='submit'  style= {{color:"white"}}>
                        Save Address
                    </Button>
                    </div> */}
                    </div>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSaveAddress}>
                    {/* Input fields for the address */}
                    {/* Example: */}
                    <Form.Group controlId="addressTitle" className='mb-3'>
                        <Form.Label className='fw-normal'>Address Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Eg, Home, Work, Other"
                            name="addressTitle"
                            value={addressData.addressTitle}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                    {/* Add other address fields similarly */}
                    <Form.Group controlId="flat" className='mb-3'>
                        <Form.Label>Flat No</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Flat No"
                            name="flat"
                            value={addressData.flat}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="area" className='mb-3'>
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Area"
                            name="area"
                            value={addressData.area}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="landmark" className='mb-3'>
                        <Form.Label>Landmark</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Landmark"
                            name="landmark"
                            value={addressData.landmark}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="city" className='mb-3'>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter City"
                            name="city"
                            value={addressData.city}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="state" className='mb-3'>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter state"
                            name="state"
                            value={addressData.state}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="pincode" className='mb-3'>
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter pincode"
                            name="pincode"
                            value={addressData.pincode}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                    
                    
                      

                <div style={{display: "flex", justifyContent: "center", marginBottom:"24px",marginTop:"32px"}}>
                    <div style={{display:"flex",justifyContent:"center",backgroundColor:"black",borderRadius:"5px",padding:"10px"}}>
                    <Button variant="outlined" type='submit'  style= {{color:"white"}}>
                        Save Address
                    </Button>
                    </div>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddressModal;
