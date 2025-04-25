import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Dashboard Component
const DashboardPage = () => {
  const stats = [
    { title: 'Total Referrals', value: '1,254', change: '+12%', trend: 'up', icon: '👥' },
    { title: 'Successful', value: '842', change: '+8%', trend: 'up', icon: '✅' },
    { title: 'Pending', value: '312', change: '-3%', trend: 'down', icon: '⏳' },
    { title: 'Conversion', value: '67%', change: '+5%', trend: 'up', icon: '📈' },
  ];

  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Referrals',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
                <div className={`mt-2 flex items-center text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend === 'up' ? '↑' : '↓'} {stat.change} vs last month
                </div>
              </div>
              <div className="p-3 rounded-lg bg-indigo-50 text-indigo-700 text-xl">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Referral Performance</h2>
          <select className="text-sm border-gray-200 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
        <Line data={performanceData} options={{
          responsive: true,
          plugins: { legend: { position: 'top' } },
          scales: { y: { beginAtZero: true } }
        }} height={300} />
      </div>
    </div>
  );
};

// AI Agent Component
const AiAgentPage = () => {
  const agentStats = [
    { name: 'Conversations', value: '1,842', change: '+15%' },
    { name: 'Resolutions', value: '1,230', change: '+22%' },
    { name: 'Avg. Response Time', value: '2.4s', change: '-0.8s' },
    { name: 'Satisfaction', value: '92%', change: '+3%' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">AI Agent Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Agent Performance</h2>
          <div className="space-y-4">
            {agentStats.map((stat, index) => (
              <div key={index} className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-600">{stat.name}</span>
                <div className="flex items-center">
                  <span className="font-medium mr-2">{stat.value}</span>
                  <span className={`text-xs px-2 py-1 rounded ${stat.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-3">
            {['New conversation started', 'Ticket #1234 resolved', 'Agent training updated', 'New FAQ added'].map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0 h-2 w-2 mt-2 bg-indigo-500 rounded-full mr-3"></div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Campaign Component
const CampaignPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Campaign Management</h1>
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Active Campaigns</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
          + New Campaign
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referrals</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[
              { name: 'Summer Sale', status: 'Active', date: 'Jun 15, 2023', referrals: 342 },
              { name: 'New User Bonus', status: 'Active', date: 'May 30, 2023', referrals: 189 },
              { name: 'Spring Promotion', status: 'Ended', date: 'Apr 10, 2023', referrals: 521 },
            ].map((campaign, i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{campaign.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {campaign.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.referrals}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// Promoter Component
const PromoterPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Promoter Network</h1>
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Top Promoters</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
          Invite Promoters
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Alex Johnson', referrals: 142, earnings: '$1,420', avatar: 'AJ' },
          { name: 'Sarah Williams', referrals: 128, earnings: '$1,280', avatar: 'SW' },
          { name: 'Michael Brown', referrals: 98, earnings: '$980', avatar: 'MB' },
        ].map((promoter, i) => (
          <div key={i} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-bold mr-3">
                {promoter.avatar}
              </div>
              <div>
                <h3 className="font-medium">{promoter.name}</h3>
                <p className="text-sm text-gray-500">Top Promoter</p>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-500">Referrals</p>
                <p className="font-medium">{promoter.referrals}</p>
              </div>
              <div>
                <p className="text-gray-500">Earnings</p>
                <p className="font-medium">{promoter.earnings}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Labels Component
const LabelsPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Label Management</h1>
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Your Labels</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
          + New Label
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {['VIP', 'New', 'Active', 'Inactive', 'Potential', 'Verified'].map((label, i) => (
          <div key={i} className="border rounded-lg p-4 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-indigo-100 mb-2 flex items-center justify-center">
              <span className="material-icons text-indigo-600">label</span>
            </div>
            <span className="font-medium">{label}</span>
            <span className="text-xs text-gray-500 mt-1">{(i+1)*12} users</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Payout Component
const PayoutPage = () => {
  const payoutData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Payouts',
        data: [1200, 1900, 1500, 2000, 1800, 2200, 2500],
        backgroundColor: '#6366F1',
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Payout Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Payout History</h2>
          <Bar data={payoutData} options={{
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
          }} height={250} />
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Next Payout</h2>
          <div className="bg-indigo-50 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Estimated Amount</span>
              <span className="font-bold text-indigo-700">$1,850</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Processing Date</span>
              <span className="font-medium">Jul 15, 2023</span>
            </div>
          </div>
          
          <h3 className="font-medium mb-2">Recent Transactions</h3>
          <div className="space-y-3">
            {[
              { date: 'Jul 1, 2023', amount: '$1,200', status: 'Completed' },
              { date: 'Jun 1, 2023', amount: '$1,100', status: 'Completed' },
              { date: 'May 1, 2023', amount: '$950', status: 'Completed' },
            ].map((txn, i) => (
              <div key={i} className="flex justify-between items-center pb-2 border-b border-gray-100">
                <div>
                  <p className="text-sm font-medium">{txn.date}</p>
                  <p className="text-xs text-gray-500">{txn.status}</p>
                </div>
                <p className="font-medium">{txn.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ isOpen, toggle }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600';
  };

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-200 ease-in-out bg-indigo-700 text-white w-64 z-30`}>
      <div className="flex items-center justify-between p-4 border-b border-indigo-800">
        <h1 className="text-xl font-bold">ReferralHub</h1>
        <button onClick={toggle} className="md:hidden p-1 rounded-md hover:bg-indigo-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/')}`}
            >
              <span className="material-icons mr-3">dashboard</span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/ai-agent"
              className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/ai-agent')}`}
            >
              <span className="material-icons mr-3">smart_toy</span>
              <span>AI Agent</span>
            </Link>
          </li>
          <li>
            <Link
              to="/campaign"
              className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/campaign')}`}
            >
              <span className="material-icons mr-3">campaign</span>
              <span>Campaign</span>
            </Link>
          </li>
          <li>
            <Link
              to="/promoter"
              className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/promoter')}`}
            >
              <span className="material-icons mr-3">people</span>
              <span>Promoter</span>
            </Link>
          </li>
          <li>
            <Link
              to="/labels"
              className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/labels')}`}
            >
              <span className="material-icons mr-3">label</span>
              <span>Labels</span>
            </Link>
          </li>
          <li>
            <Link
              to="/payout"
              className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive('/payout')}`}
            >
              <span className="material-icons mr-3">payments</span>
              <span>Payout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Navbar Component
const Navbar = ({ toggleSidebar }) => {
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
          <h1 className="text-xl font-semibold text-gray-800 hidden md:block">Dashboard</h1>
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
          
          <div className="flex items-center">
            <img 
              className="w-8 h-8 rounded-full" 
              src="https://randomuser.me/api/portraits/men/1.jpg" 
              alt="User" 
            />
            <span className="ml-2 text-sm font-medium hidden md:inline">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
};

// Main App Component
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <Navbar toggleSidebar={toggleSidebar} />
          
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/ai-agent" element={<AiAgentPage />} />
              <Route path="/campaign" element={<CampaignPage />} />
              <Route path="/promoter" element={<PromoterPage />} />
              <Route path="/labels" element={<LabelsPage />} />
              <Route path="/payout" element={<PayoutPage />} />
            </Routes>
          </main>
        </div>
      </div>
    
  );
};

export default App;