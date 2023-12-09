
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const TransactionForm = () => {
  const [formData, setFormData] = useState({
    Amount: '',
    TransactionType: '',
    PartyName: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = e => {
    console.log("TransactionType:", e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async e => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      await axios.post('http://localhost:5220/api/v1/transactions', formData, {
        headers: {
          "x-access-token": `${localStorage.getItem('token')}`,
        },
      });
      setSuccessMessage('Transaction created successfully!');
      
      setFormData({
        Amount: '',
        TransactionType: '',
        PartyName: '',
      });

    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSuccessMessage('');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [successMessage]);

  return (
    <div className="font-poppins min-h-screen flex items-center justify-center bg-gradient-to-r  from-purple-400 to-blue-300">
      <div className="max-w-md w-full p-8 sm:mx-2 bg-white shadow-lg rounded-md">
      {successMessage && (
          <div className="bg-green-500 text-white p-4 mb-4 rounded-md text-center">
            {successMessage}
          </div>
        )}
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create Transaction</h2>
        <form className="space-y-4">
          <label className="block text-sm font-medium text-gray-600">
            Amount:
            <input
              type="number"
              name="Amount"
              value={formData.Amount}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </label>
          <label className="block text-sm font-medium text-gray-600">
            Transaction Type:
            <select
              name="TransactionType"
              value={formData.TransactionType}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="paid">Paid</option>
              <option value="received">Received</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-gray-600">
            Party Name:
            <input
              type="text"
              name="PartyName"
              value={formData.PartyName}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </label>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-gradient-to-r  from-purple-400 to-blue-300 hover:text-black hover:font-semibold"

          >
            Create Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;