import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import AiAgentPage from './pages/AiAgentPage';
import CampaignPage from './pages/CampaignPage';
import PromoterPage from './pages/PromoterPage';
import LeadsPage from './pages/LeadsPage.jsx';
import PayoutPage from './pages/PayoutPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage.jsx';
import { Toaster } from 'react-hot-toast';
import NewCampaign from './pages/NewCampaign.jsx'; 
import BusinessOwnerForm from './pages/BusinessOwnerForm.jsx';
import BusinessOwnerDetails from './pages/BusinessOwnerDetails.jsx';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(() => {
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
      <>
        <Toaster />
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUpPage onLogin={handleLogin} />} />
          
        </Routes>
      </>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Toaster />
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} onLogout={handleLogout} />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/ai-agent" element={<AiAgentPage />} />
            <Route path="/campaign" element={<CampaignPage />} />
            <Route path="/promoter" element={<PromoterPage />} />
            <Route path="/leads" element={<LeadsPage />} />
            <Route path="/payout" element={<PayoutPage />} />
            <Route path="/new-campaign" element={<NewCampaign />} />
            <Route path="/business-owner" element={<BusinessOwnerForm />} />
            <Route path="/owner-details" element={<BusinessOwnerDetails />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;