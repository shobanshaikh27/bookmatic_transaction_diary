// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import TransactionList from './components/TransactionList';
import ShowTransactions from './pages/ShowTransactions';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/:id" element={<TransactionList />}/> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/getTransactions' element={<ShowTransactions />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
