import React from 'react';

const dummyLabels = [
  { name: 'VIP', count: 48, color: 'bg-indigo-100', iconColor: 'text-indigo-600' },
  { name: 'New', count: 36, color: 'bg-green-100', iconColor: 'text-green-600' },
  { name: 'Active', count: 72, color: 'bg-blue-100', iconColor: 'text-blue-600' },
  { name: 'Inactive', count: 24, color: 'bg-gray-100', iconColor: 'text-gray-600' },
  { name: 'Potential', count: 60, color: 'bg-yellow-100', iconColor: 'text-yellow-600' },
  { name: 'Verified', count: 90, color: 'bg-purple-100', iconColor: 'text-purple-600' },
];

const dummyLeads = [
  {
    name: 'Priya Sharma',
    phone: '9876543210',
    leads: 12,
    conversion: '33%',
    lastFollowUp: '2025-04-20',
    revenue: '₹12,000',
    status: 'Verified',
  },
  {
    name: 'Ravi Verma',
    phone: '9123456789',
    leads: 8,
    conversion: '25%',
    lastFollowUp: '2025-04-18',
    revenue: '₹7,500',
    status: 'Pending',
  },
  {
    name: 'Neha Mehta',
    phone: '9012345678',
    leads: 15,
    conversion: '40%',
    lastFollowUp: '2025-04-22',
    revenue: '₹15,000',
    status: 'Verified',
  },
];

const LeadsPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Lead Management</h1>
        <p className="text-gray-500 mt-1">Track, categorize, and manage your leads efficiently.</p>
      </div>

      {/* Label Cards */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Lead Labels</h2>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search labels..."
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition-all">
              + New Lead
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {dummyLabels.map((label, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex flex-col items-center bg-white hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-full ${label.color} mb-2 flex items-center justify-center`}>
                <span className={`material-icons ${label.iconColor}`}>label</span>
              </div>
              <span className="font-medium text-gray-800">{label.name}</span>
              <span className="text-xs text-gray-500 mt-1">{label.count} users</span>
            </div>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Lead Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3">Lead Name</th>
                <th className="px-4 py-3">Contact No.</th>
                <th className="px-4 py-3">Leads</th>
                <th className="px-4 py-3">Conversion Rate</th>
                <th className="px-4 py-3">Last Follow-Up</th>
                <th className="px-4 py-3">Revenue Generated</th>
                <th className="px-4 py-3">Referrer Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {dummyLeads.map((lead, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{lead.name}</td>
                  <td className="px-4 py-3">{lead.phone}</td>
                  <td className="px-4 py-3">{lead.leads}</td>
                  <td className="px-4 py-3">{lead.conversion}</td>
                  <td className="px-4 py-3">{lead.lastFollowUp}</td>
                  <td className="px-4 py-3">{lead.revenue}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        lead.status === 'Verified' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm">View</button>
                    <span className="mx-2 text-gray-300">|</span>
                    <button className="text-red-500 hover:text-red-700 text-sm">Delete</button>
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

export default LeadsPage;
