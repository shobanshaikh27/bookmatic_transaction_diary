// // src/components/TransactionList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TransactionList = () => {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/v1/transactions',{
//           headers: {
//             "x-access-token": `${localStorage.getItem('token')}`,
//           },
//         });
//         console.log("my list",response.data)
//         setTransactions(response.data.data);
//       } catch (error) {
//         console.error('Error fetching transactions:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Transaction List</h2>
//       <ul>
//         {transactions.map(transaction => (
//           <li key={transaction.id}>
//             Amount: {transaction.Amount}, Type: {transaction.TransactionType}, Party: {transaction.PartyName}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TransactionList;

// src/components/TransactionList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5220/api/v1/transactions/');
        setTransactions(response.data.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchData();
  }, []);

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.PartyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
     
      <nav className="flex items-center justify-between bg-gray-800 p-4">
        <h2 className="text-white text-lg font-semibold">Transaction List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 w-30 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
      
        </div>
      </nav>

      {/* Table */}
      <div className="font-poppins relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Party
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id} className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4">
                  {transaction.id}
                </th>
                <td className="px-6 py-4">{transaction.Amount}</td>
                <td className="px-6 py-4">{transaction.TransactionType}</td>
                <td className="px-6 py-4">{transaction.PartyName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;