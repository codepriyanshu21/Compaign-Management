import React from 'react';

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

export default CampaignPage;
