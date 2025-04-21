import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({onLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [link, setLink] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
    onLogin();
    navigate('/');
  };

  const handleMagicLink = (e) => {
    e.preventDefault();
    console.log('Magic link requested for:', email);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
      <svg
        className="absolute w-full h-full top-60 left-40 z-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 Q100,200 200,100 T400,100 T600,100 T800,100"
          fill="none"
          stroke="#305AFFA6"
          strokeDasharray="2,6"
          strokeWidth="2"
          className="animate-dash"
        />

      </svg>
      <svg
        className="absolute w-full h-full top-0 left-1/2 z-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 Q100,200 200,100 T400,100 T600,100 T800,100"
          fill="none"
          stroke="#305AFFA6"
          strokeDasharray="2,6"
          strokeWidth="2"
          className="animate-dash"
        />

      </svg>

      <svg
        className="absolute w-full h-full top-3/4 left-40 z-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 Q100,200 200,100 T400,100 T600,100 T800,100"
          fill="none"
          stroke="#305AFFA6"
          strokeDasharray="2,6"
          strokeWidth="2"
          className="animate-dash"
        />

      </svg>
      <svg
        className="absolute w-full h-full top-1/2 left-1/2 z-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 Q100,200 200,100 T400,100 T600,100 T800"
          fill="none"
          stroke="#305AFFA6"
          strokeDasharray="2,6"
          strokeWidth="2"
          className="animate-dash"
        />

      </svg>
      <div className="w-full relative max-w-md bg-white rounded-xl shadow-sm p-6 space-y-3">
        <button className="w-full py-3 px-4 border border-gray-300 rounded-lg text-blue-500 font-medium 
                         transition-all duration-200 hover:border-blue-400 hover:bg-blue-50">
          Continue with Google/Microsoft
        </button>

        <div className="space-y-4">
          <h2 className="text-gray-700 font-medium">Magic Link Login</h2>
          <form onSubmit={handleMagicLink} className="space-y-4">
            <input
              type="url"
              placeholder="Enter your magic link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 
                        focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg text-white font-medium bg-blue-500 
                       hover:bg-blue-600 transition-all duration-200"
            >
              Send Magic Link
            </button>
          </form>
        </div>

        <div className="flex items-center mt-1">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        <div className="space-y-2">
          <h2 className="text-gray-700 font-medium">Email</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="robert.fox@myemail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 
                        focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />

            <div className="space-y-1">
              <h2 className="text-gray-700 font-medium">Password</h2>
              <div className="relative">
                <input
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                  Remember Me
                </label>
              </div>

              <a href="#forgot-password" className="text-blue-500 text-sm hover:text-blue-600">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg text-white font-medium bg-blue-500 
                       hover:bg-blue-600 transition-all duration-200"
            >
              Login
            </button>
          </form>
        </div>

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

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-500 hover:text-blue-600 font-medium">
              Register now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
