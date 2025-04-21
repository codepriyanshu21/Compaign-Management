import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

export default PayoutPage;
