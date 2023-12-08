// src/components/TransactionList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/transactions',{
          headers: {
            "x-access-token": `${localStorage.getItem('token')}`,
          },
        });
        console.log("my list",response.data)
        setTransactions(response.data.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            Amount: {transaction.Amount}, Type: {transaction.TransactionType}, Party: {transaction.PartyName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
