// // Register.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [fullname, setFullname] = useState('');

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/v1/signUp', {
//         username,
//         password,
//         fullname,
//       });

//       console.log('Registration successful:', response.data);
//       // You can redirect to the login page or handle success as needed
//     } catch (error) {
//       console.error('Registration failed:', error.response.data);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-md">
//         <h2 className="text-3xl font-semibold mb-6">Register</h2>
//         <form className="space-y-4">
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-gray-600">
//               Username
//             </label>
//             <input
//               id="username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-600">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           <div>
//             <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">
//               Fullname
//             </label>
//             <input
//               id="fullname"
//               type="text"
//               value={fullname}
//               onChange={(e) => setFullname(e.target.value)}
//               className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           <button
//             type="button"
//             onClick={handleRegister}
//             className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5220/api/v1/signUp', {
        username,
        password,
        fullname,
      });

      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error.response.data);
    }
  };

  return (
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
            />
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
  );
};

export default Register;