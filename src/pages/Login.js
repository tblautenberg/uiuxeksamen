import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      onLogin(true);
      navigate('/dashboard');
    } else {
      alert('Wrong email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-xl p-8 w-full max-w-md border border-white/20">
        <div className="flex justify-center mb-6">
          <img src="/Resources/Logo.png" alt="Login Logo" className="h-16" />


        </div>
        <h2 className="text-white text-3xl font-bold mb-6 text-center tracking-tight">
          Please login to access the site
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white py-3 rounded font-semibold"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
