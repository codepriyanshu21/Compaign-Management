import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-indigo-100 text-white' : 'text-indigo-100 hover:bg-indigo-100';
  };

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-200 ease-in-out bg-white text-blue-800 w-64 z-30 flex flex-col`}>
      <div className="flex items-center justify-between p-4 border-b border-indigo-400">
        <h1 className="text-xl font-bold mb-3">ReferralHub</h1>
        <button onClick={toggle} className="md:hidden p-1 rounded-md hover:bg-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="p-4 flex-1 overflow-auto">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className={`flex items-center bg-white p-3 rounded-lg transition-colors duration-200 ${isActive('/')}`}>
              <span className="material-icons text-blue-500 mr-3">dashboard</span>
              <span className="text-blue-500">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/ai-agent" className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/ai-agent')}`}>
              <span className="material-icons text-blue-500 mr-3">smart_toy</span>
              <span className="text-blue-500">AI Agent</span>
            </Link>
          </li>
          <li>
            <Link to="/campaign" className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/campaign')}`}>
              <span className="material-icons text-blue-500 mr-3">campaign</span>
              <span className="text-blue-500">Campaign</span>
            </Link>
          </li>
          <li>
            <Link to="/promoter" className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/promoter')}`}>
              <span className="material-icons text-blue-500 mr-3">people</span>
              <span className="text-blue-500">Promoter</span>
            </Link>
          </li>
          <li>
            <Link to="/business-owner" className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/business-owner')}`}>
              <span className="material-icons text-blue-500 mr-3">business</span>
              <span className="text-blue-500">Business Owner Form</span>
            </Link>
          </li>
          <li>
            <Link to="/leads" className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/leads')}`}>
              <span className="material-icons text-blue-500 mr-3">label</span>
              <span className="text-blue-500">Leads</span>
            </Link>
          </li>
          <li>
            <Link to="/payout" className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/payout')}`}>
              <span className="material-icons text-blue-500 mr-3">payments</span>
              <span className="text-blue-500">Payout</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Settings and Help at Bottom */}
      <div className="p-4 border-t border-indigo-200">
        <ul className="space-y-2">
          <li>
            <div className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/settings')}`}>
              <span className="material-icons text-blue-500 mr-3">settings</span>
              <span className="text-blue-500">Settings</span>
            </div>
          </li>
          <li>
            <div className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/help')}`}>
              <span className="material-icons text-blue-500 mr-3">help_outline</span>
              <span className="text-blue-500">Help</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
