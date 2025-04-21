import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

export default DashboardPage;
