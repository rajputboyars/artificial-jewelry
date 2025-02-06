// components/AddressCard.js

// import { useState } from "react";


// components/Modal.js

const Modal = ({ isOpen, onClose, onSave, address, onInputChange }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h3 className="text-xl font-semibold mb-4">Edit Address</h3>
        <div>
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={onInputChange}
            className="block w-full mb-2 border border-gray-300 p-2 rounded"
            placeholder="Street"
          />
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={onInputChange}
            className="block w-full mb-2 border border-gray-300 p-2 rounded"
            placeholder="City"
          />
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={onInputChange}
            className="block w-full mb-2 border border-gray-300 p-2 rounded"
            placeholder="State"
          />
          <input
            type="text"
            name="postalCode"
            value={address.postalCode}
            onChange={onInputChange}
            className="block w-full mb-2 border border-gray-300 p-2 rounded"
            placeholder="Postal Code"
          />
          <input
            type="text"
            name="country"
            value={address.country}
            onChange={onInputChange}
            className="block w-full mb-2 border border-gray-300 p-2 rounded"
            placeholder="Country"
          />
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              name="isDefault"
              checked={address.isDefault}
              onChange={() => onInputChange({ target: { name: 'isDefault', value: !address.isDefault } })}
              className="mr-2"
            />
            Set as Default Address
          </label>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Modal;




// components/AddressCard.js

import { useState } from "react";
// import Modal from "./Modal"; // Import Modal component

const AddressCard = ({ address, onUpdate, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [newAddress, setNewAddress] = useState({ ...address });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  const handleSave = () => {
    onUpdate(newAddress);
    setIsModalOpen(false); // Close modal after save
  };

  const handleCancel = () => {
    setNewAddress({ ...address });
    setIsModalOpen(false); // Close modal on cancel
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{newAddress.isDefault ? "Default Address" : "Address"}</h3>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(address._id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Display address info */}
      <div>
        <p className="font-medium">{newAddress.street}</p>
        <p>{newAddress.city}, {newAddress.state} {newAddress.postalCode}</p>
        <p>{newAddress.country}</p>
        {newAddress.isDefault && (
          <span className="text-green-500 font-semibold">Default Address</span>
        )}
      </div>

      {/* Modal for editing address */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCancel}
        onSave={handleSave}
        address={newAddress}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default AddressCard;