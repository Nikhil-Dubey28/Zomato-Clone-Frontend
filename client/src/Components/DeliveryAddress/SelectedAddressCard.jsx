// SelectedAddressCard.js
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
const SelectedAddressCard = ({ selectedAddress, handleChangeAddress }) => {
    return (
        <div className="col-md-8">
            <h2 className="card-title">Delivery Address
                <span
                    style={{ borderRadius: "50%", backgroundColor: "#60b246", color: "white", paddingBottom: "8px", paddingRight: "8px", paddingLeft: "8px", marginLeft: "24px" }}>
                    <CheckIcon />
                </span>
            </h2>
            <div className="selected-address-details">
                {selectedAddress && (
                    <div className="card selected-address-card">
                        <div className="card-body">
                            <p>{selectedAddress.addressTitle}</p>
                            <p>{selectedAddress.flat}, {selectedAddress.area}</p>
                            <p>Landmark - {selectedAddress.landmark}</p>
                            <p>{selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pincode}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SelectedAddressCard;
