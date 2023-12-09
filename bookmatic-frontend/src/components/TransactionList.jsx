
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5220/api/v1/transactions', {
          headers: {
            "x-access-token": `${localStorage.getItem('token')}`,
          },
        });
        console.log("my list", response.data)
        setTransactions(response.data.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="font-poppins container min-h-screen mx-auto p-4 bg-gradient-to-r from-purple-400 to-blue-300">
      <h2 className="text-3xl font-semibold mb-4 text-center">Transaction List</h2>
      <table className="min-w-full bg-gradient-to-r from-violet-400 to-blue-500  border border-gray-300 shadow-md rounded-md overflow-hidden">
        <thead>
          <tr className='font-extrabold'>
            <th className="py-2 px-4 border-b text-center">Id</th>
            <th className="py-2 px-4 border-b text-center">Amount</th>
            <th className="py-2 px-4 border-b text-center">Type</th>
            <th className="py-2 px-4 border-b text-center">Party</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id} className="hover:bg-gradient-to-r from-pink-400 to-blue-600 font-semibold">
              <td className="py-2 px-4 border-b text-center">{transaction.id}</td>
              <td className="py-2 px-4 border-b text-center">{transaction.Amount}</td>
              <td className="py-2 px-4 border-b text-center">{transaction.TransactionType}</td>
              <td className="py-2 px-4 border-b text-center">{transaction.PartyName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;


