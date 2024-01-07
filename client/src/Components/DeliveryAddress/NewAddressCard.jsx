// NewAddressCard.js
import React from 'react';
import { Button } from 'react-bootstrap';

const NewAddressCard = ({ handleShowModal }) => {
    return (
        <div className="col-md-6 mb-3">
            <div className="card saved-address-card" onClick={handleShowModal}>
                <div className="card-body">
                    <h2 style={{ justifyContent: "flex-start", fontSize: "1.2rem", marginBottom: "72px" }}>Add New Address</h2>
                    <Button variant="outlined" style={{ color: '#60b246', border: '1px solid #60b246', width: "48%" }}>Add New</Button>
                </div>
            </div>
        </div>
    );
};

export default NewAddressCard;
