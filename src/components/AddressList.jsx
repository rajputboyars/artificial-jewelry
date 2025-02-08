// components/AddressList.js

import { useEffect, useState } from "react";
import AddressCard from "./AddressCard";
import Modal from "./Modal";
import axiosInstance from "@/axiosInstance";

const AddressList = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    isDefault: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchAllAddressOfUser = async () => {
    try {
      const response = await axiosInstance.get("/api/addresses")
      console.log("All addresses fetched successfully", response.data);
      setAddresses([...response.data])
    } catch (error) {
      console.log("failed to get all address");
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAllAddressOfUser()
  }, [setAddresses]);


  const handleAddAddress = async () => {
    // console.log(newAddress, "qwertyui");

    try {
      const response = await axiosInstance.post("/api/addresses", { address: newAddress })
      console.log("adderss save successfully", response);
    } catch (error) {
      console.log("failed to save address");
      console.error(error);
    }

    setAddresses([
      ...addresses,
      { ...newAddress, id: Date.now() }, // Assign a unique ID
    ]);
    setNewAddress({
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      isDefault: false,
    });
    setIsModalOpen(false); // Close the modal after saving
  };

  const handleUpdateAddress = async(updatedAddress) => {
    console.log(updatedAddress,updatedAddress._id);
    const addressId = updatedAddress._id
    try {
      const response = await axiosInstance.put(`/api/addresses/${addressId}`,updatedAddress)
      console.log("address update successfully",response);
      
    } catch (error) {
      console.error("address update failed");
      
      console.log(error);
    }
    const updatedAddresses = addresses.map((address) =>
      address.id === updatedAddress.id ? updatedAddress : address
    );
    setAddresses(updatedAddresses);
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      const response = await axiosInstance.delete(`/api/addresses/${addressId}`,{
        withCredentials:true
      })
      console.log("address delete successfully", response);
    } catch (error) {
      console.log(error.message);
    }
    const filteredAddresses = addresses.filter((address) => address.id !== addressId);
    setAddresses(filteredAddresses);
  };

  return (
    <div className="mx-auto p-4">
      <div className="flex  justify-between">
        <h2 className="text-2xl font-semibold mb-4">Manage Addresses</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded mb-4"
        >
          Add Address
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddAddress}
        newAddress={newAddress}
        setNewAddress={setNewAddress}
      />

      {addresses.map((address, index) => (
        <AddressCard
          key={index}
          address={address}
          onUpdate={handleUpdateAddress}
          onDelete={handleDeleteAddress}
        />
      ))}
    </div>
  );
};

export default AddressList;
