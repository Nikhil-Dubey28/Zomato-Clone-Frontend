// CategoryModal.js

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CategoryModal = ({ show, handleClose, categories, handleCategoryClick }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select a Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {categories.map((category) => (
            <li key={category._id} onClick={() => handleCategoryClick(category)}>
              {category.name}
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default CategoryModal;
