import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password || !fullname ) {
      setAlert({ type: 'error', message: 'Please enter username,password and fullname.' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5220/api/v1/signUp', {
        username,
        password,
        fullname,
      });

      console.log('Registration successful:', response.data);
      setAlert({ type: 'success', message: 'Registration successful!' });
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      setAlert({ type: 'error', message: 'Registration failed. Please try again.' });
    }
  };
  const handleLoginClick = () => {
    navigate('/login');
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert('');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <>
    { alert && (
      <div
        className={`p-2 text-center  ${alert.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
      >
        {alert.message}
      </div>
    )}
<div className="font-poppins min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
  <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-md">
    <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-600">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div>
        <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">
          Fullname
        </label>
        <input
          id="fullname"
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="text-sm text-gray-600">
        Already a member?{' '}
        <button
          type="button"
          onClick={handleLoginClick}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          Login
        </button>
      </div>
      <button
        type="button"
        onClick={handleRegister}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"
      >
        Register
      </button>
    </form>
  </div>
</div>

</>
  );
};

export default Register;