import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
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

  const circleStats = [
    { label: 'Repeat Rate', value: 42, color: '#10B981' },
    { label: 'Engagement', value: 67, color: '#EF4444' },
    { label: 'Lead Churn', value: 28, color: '#3B82F6' },
    { label: 'Upsell Rate', value: 19, color: '#8B5CF6' },
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

  const doughnutData = {
    labels: ['Organic', 'Paid Ads', 'Social', 'Referral'],
    datasets: [
      {
        data: [350, 200, 150, 100],
        backgroundColor: ['#34D399', '#FBBF24', '#60A5FA', '#A78BFA'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
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

      {/* Circle Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {circleStats.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20">
                  <circle cx="40" cy="40" r="30" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke={item.color}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={188.4}
                    strokeDashoffset={(1 - item.value / 100) * 188.4}
                    strokeLinecap="round"
                    transform="rotate(-90 40 40)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-900">
                  {item.value}%
                </div>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Performance Chart + Doughnut */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 w-full lg:w-2/3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Referral Performance</h2>
            <select className="text-sm border-gray-200 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <Line
            data={performanceData}
            options={{
              responsive: true,
              plugins: { legend: { position: 'top' } },
              scales: { y: { beginAtZero: true } },
            }}
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 w-full lg:w-1/3 flex items-center justify-center">
          <div className="w-full">
            <h2 className="text-lg font-semibold text-gray-900 text-center mb-4">Traffic Sources</h2>
            <Doughnut
              data={doughnutData}
              options={{
                plugins: {
                  legend: { position: 'bottom' },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
