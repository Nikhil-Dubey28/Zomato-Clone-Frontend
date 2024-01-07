import React, { useState } from 'react';
import './DeliveryAddressContainer.css'; // Import your custom CSS file for styling
import CartContainer from './CartContainer';
import Navigation from '../Navbar/Navigation';

const DeliveryAddressContainer = () => {
  // Static data for saved addresses
  const savedAddressesData = [
    {
      id: 1,
      street: '123 Main St',
      city: 'City A',
      zipCode: '12345',
      country: 'Country X',
    },
    {
      id: 2,
      street: '456 Elm St',
      city: 'City B',
      zipCode: '67890',
      country: 'Country Y',
    },
    {
        id: 1,
        street: '123 Main St',
        city: 'City A',
        zipCode: '12345',
        country: 'Country X',
      },
      {
        id: 2,
        street: '456 Elm St',
        city: 'City B',
        zipCode: '67890',
        country: 'Country Y',
      },
    // Add more addresses as needed
  ];

  const [savedAddresses, setSavedAddresses] = useState(savedAddressesData);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showSavedAddresses, setShowSavedAddresses] = useState(true);

  // Function to handle selecting an address
  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
    setShowSavedAddresses(false);
  };

  // Function to handle changing the address
  const handleChangeAddress = () => {
    setSelectedAddress(null);
    setShowSavedAddresses(true);
  };

  return (
    <>
       
    <div className="container mt-4">
      
      <div className="card">
        {showSavedAddresses ? (
          <div className="card-body">
            <h2 className="card-title">Choose a Delivery Address</h2>
            <div className="row">
              {savedAddresses.map((address) => (
                <div key={address.id} className="col-md-6 mb-3">
                  <div className="card saved-address-card" onClick={() => handleSelectAddress(address)}>
                    <div className="card-body">
                      <p>{address.street}</p>
                      <p>{address.city}, {address.zipCode}</p>
                      <p>{address.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <h2 className="card-title">Delivery Address</h2>
                <div className="selected-address-details">
                  {selectedAddress && (
                    <div className="card selected-address-card">
                      <div className="card-body">
                        <p>{selectedAddress.street}</p>
                        <p>{selectedAddress.city}, {selectedAddress.zipCode}</p>
                        <p>{selectedAddress.country}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
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
