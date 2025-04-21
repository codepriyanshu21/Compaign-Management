import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    console.log('Sign up attempt:', { name, email, password });
    // After successful signup, set login state and navigate to dashboard
    if (onLogin) {
      onLogin();
    }
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Register for ReferalHub</h2>
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg text-white font-medium bg-blue-500 
                       hover:bg-blue-600 transition-all duration-200"
          >
            Sign Up
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          <div className="flex justify-center space-x-6">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <img src="	https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google" className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg" alt="X" className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6" />
            </button>
          </div>

        </form>
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            className="text-blue-500 hover:text-blue-600 font-medium"
            onClick={() => navigate('/login')}
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
