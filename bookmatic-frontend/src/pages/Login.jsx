// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [alert, setAlert] = useState(null);
//   const navigate = useNavigate();


//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5220/api/v1/login', {
//         username,
//         password,
//       });

//       console.log('Login successful:', response.data);
//       setAlert({ type: 'success', message: 'Login successful!' });
//       const token = response.data.data
//       localStorage.setItem("token", token)
//       navigate('/');

//     } catch (error) {
//       console.error('Login failed:', error.response.data);
//       setAlert({ type: 'error', message: 'Login failed. Incorrect Username or Password.' });
//     }
//   };
//   const handleRegisterClick = () => {
//     navigate('/register');
//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setAlert('');
//     }, 5000);

//     return () => clearTimeout(timeout);
//   }, [alert]);

//   return (
//     <>
//     { alert && (
//       <div
//         className={`p-2  text-center  ${alert.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
//           }`}
//       >
//         {alert.message}
//       </div>
//     )}
//       <div className=" font-poppins min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
//         <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-md">
//           <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Login</h2>
//           <form className="space-y-4">
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium text-gray-600">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-600">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 required
//               />
//             </div>
//             <div className="text-sm text-gray-600">
//               Not a member?{' '}
//               <button
//                 type="button"
//                 onClick={handleRegisterClick}
//                 className="text-blue-500 hover:underline focus:outline-none"
//               >
//                 Register
//               </button>
//             </div>
//             <button
//               type="button"
//               onClick={handleLogin}
//               className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Check if username or password is empty
    if (!username || !password) {
      setAlert({ type: 'error', message: 'Please enter both username and password.' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5220/api/v1/login', {
        username,
        password,
      });

      console.log('Login successful:', response.data);
      setAlert({ type: 'success', message: 'Login successful!' });
      const token = response.data.data;
      localStorage.setItem('token', token);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response.data);
      setAlert({ type: 'error', message: 'Login failed. Incorrect Username or Password.' });
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(null);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <>
      {alert && (
        <div
          className={`p-2 text-center ${alert.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
        >
          {alert.message}
        </div>
      )}
      <div className="font-poppins min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-md">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Login</h2>
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
            <div className="text-sm text-gray-600">
              Not a member?{' '}
              <button
                type="button"
                onClick={handleRegisterClick}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Register
              </button>
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
