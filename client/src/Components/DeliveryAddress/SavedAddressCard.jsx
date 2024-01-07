// SavedAddressCard.js
import React from 'react';
import { Button } from 'react-bootstrap';

const SavedAddressCard = ({ address, handleSelectAddress,handleEdit, handleDelete }) => {
    return (
        <div className="col-md-6 mb-3">
            <div className="card saved-address-card" >
                <div className="card-body" onClick={() => handleSelectAddress(address)}>
                    <p>{address.addressTitle}</p>
                    <p>{address.flat}, {address.area}</p>
                    <p>Landmark - {address.landmark}</p>
                    <p>{address.city}, {address.state} - {address.pincode}</p>
                </div>
                <div style={{display:"flex"}}>
                <Button variant="outlined" style={{ color: '#60b246', border: '1px solid #60b246', width: "48%",marginRight:"30px" }} onClick= {() => handleEdit(address)}>Edit</Button>
                <Button variant="outlined" style={{ color: 'red', border: '1px solid red', width: "48%" }} onClick={() => handleDelete(address._id)}>Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default SavedAddressCard;
