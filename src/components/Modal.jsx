// components/Modal.js

import React from 'react';

const Modal = ({ isOpen, onClose, onSave, newAddress, setNewAddress }) => {
  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h3 className="text-xl font-semibold mb-4">Add New Address</h3>

        <input
          type="text"
          name="street"
          value={newAddress.street}
          onChange={handleInputChange}
          className="block w-full mb-2 border border-gray-300 p-2 rounded"
          placeholder="Street"
        />
        <input
          type="text"
          name="city"
          value={newAddress.city}
          onChange={handleInputChange}
          className="block w-full mb-2 border border-gray-300 p-2 rounded"
          placeholder="City"
        />
        <input
          type="text"
          name="state"
          value={newAddress.state}
          onChange={handleInputChange}
          className="block w-full mb-2 border border-gray-300 p-2 rounded"
          placeholder="State"
        />
        <input
          type="text"
          name="postalCode"
          value={newAddress.postalCode}
          onChange={handleInputChange}
          className="block w-full mb-2 border border-gray-300 p-2 rounded"
          placeholder="Postal Code"
        />
        <input
          type="text"
          name="country"
          value={newAddress.country}
          onChange={handleInputChange}
          className="block w-full mb-2 border border-gray-300 p-2 rounded"
          placeholder="Country"
        />
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            name="isDefault"
            checked={newAddress.isDefault}
            onChange={() =>
              setNewAddress({ ...newAddress, isDefault: !newAddress.isDefault })
            }
            className="mr-2"
          />
          Set as Default Address
        </label>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(newAddress)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;