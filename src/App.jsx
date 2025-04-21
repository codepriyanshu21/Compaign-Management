import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import AiAgentPage from './pages/AiAgentPage';
import CampaignPage from './pages/CampaignPage';
import PromoterPage from './pages/PromoterPage';
import LabelsPage from './pages/LabelsPage';
import PayoutPage from './pages/PayoutPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage.jsx';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(() => {
    // Initialize from localStorage
    const saved = localStorage.getItem('isLoggedIn');
    return saved === 'true';
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpPage onLogin={handleLogout} />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
