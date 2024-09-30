import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAdmin();


  const handleLogin = async (e) => {
    e.preventDefault();
//     // Replace with your authentication API call
//     const response = await fakeAuthApi(email, password);
//     if (response.success) {
//       Cookies.set('admin_token', "tokennn", { expires: 1 });
//       navigate('/admin');
//     } else {
//       alert('Login failed');
//     }
//   };
const token = "hello"
login(data.token); // Set the admin token
navigate('/admin/dashboard');


}

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

// Fake auth function for demonstration
const fakeAuthApi = async (email, password) => {
  // Simulate API call
  if (email === 'admin@example.com' && password === 'password') {
    return { success: true, token: 'fake_token' };
  }
  return { success: false };
};
