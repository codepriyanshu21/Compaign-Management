import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSidebar,onLogout }) => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
    setShowLogout(false); 
  };

  return (
    <header className="bg-white shadow-sm z-20">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 mr-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>

          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="relative">
            <div 
              onClick={() => setShowLogout(!showLogout)} 
              className="flex items-center cursor-pointer"
            >
              <img 
                className="w-8 h-8 rounded-full" 
                src="https://randomuser.me/api/portraits/men/1.jpg" 
                alt="User" 
              />
              <span className="ml-2 text-sm font-medium hidden md:inline">John Doe</span>
            </div>

            {showLogout && (
              <button 
                onClick={handleLogoutClick}
                className="absolute top-full mt-2 right-0 bg-red-500 text-white px-3 py-1 rounded shadow text-sm hover:bg-red-600 z-50"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
