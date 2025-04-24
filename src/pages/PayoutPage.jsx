import React from 'react';
import {
  Gift,
  Wallet,
  CalendarDays
} from 'lucide-react';

const PayoutsPage = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          <Gift size={40} className="text-cyan-500 mb-3" />
          <h2 className="text-gray-600 font-semibold mb-1">Total Points Given</h2>
          <p className="text-2xl text-gray-600">12,500</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          <Wallet size={40} className="text-cyan-500 mb-3" />
          <h2 className="text-gray-600 font-semibold mb-1">Current Point Balance</h2>
          <p className="text-2xl  text-gray-600">1,250</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          <CalendarDays size={40} className="text-cyan-500 mb-3" />
          <h2 className="text-gray-600 font-semibold mb-1">Last Points Transfer</h2>
          <p className="text-lg text-gray-600">April 9, 2025</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 mb-6">
        <button className="text-indigo-600 font-medium hover:underline">Disputes</button>
        <button className="text-indigo-600 font-medium hover:underline">Payout Settings</button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-indigo-50 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">Payout ID</th>
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">Promoter</th>
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">Points</th>
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">Reward Date</th>
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">Reward For</th>
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                ['#P-1048', 'Emery Dokidis', '500 pts', '28-4-2024', 'Spring Boost', 'Paid', 'Request Dispute'],
                ['#P-1047', 'Kadin Lipshutz', '250 pts', '27-5-2024', 'Summer Referral Program', 'Paid', 'Request Dispute'],
                ['#P-1046', 'Randy Culhane', '300 pts', '29-5-2024', 'Early Bird Special', 'Disputed', 'Track Dispute'],
                ['#P-1045', 'Jaxson Vaccaro', '100 pts', '30-6-2024', 'Early Bird Special', 'Paid', 'Request Dispute'],
                ['#P-1044', 'Jocelyn Levin', '200 pts', '01-7-2024', 'Summer Referral Program', 'Disputed', 'Track Dispute'],
                ['#P-1043', 'Laila Emerson', '400 pts', '03-7-2024', 'Referral Campaign', 'Paid', 'Request Dispute'],
                ['#P-1042', 'Milo Baxter', '350 pts', '05-7-2024', 'Welcome Bonus', 'Disputed', 'Track Dispute'],
                ['#P-1041', 'Sophia Hart', '600 pts', '06-7-2024', 'Flash Bonus', 'Paid', 'Request Dispute'],
              ].map(([id, name, pts, date, purpose, status, action], i) => (
                <tr key={i}>
                  <td className="px-6 py-4 text-gray-900 font-medium">{id}</td>
                  <td className="px-6 py-4 text-gray-600">{name}</td>
                  <td className="px-6 py-4 text-gray-600">{pts}</td>
                  <td className="px-6 py-4 text-gray-600">{date}</td>
                  <td className="px-6 py-4 text-gray-600">{purpose}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs font-semibold rounded-full ${
                      status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-indigo-600 hover:text-indigo-900">
                    <button>{action}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PayoutsPage;
