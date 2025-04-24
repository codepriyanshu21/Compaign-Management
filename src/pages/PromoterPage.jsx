import React, { useState } from 'react';
import { bulkUploadPromoter } from '../api/authApi';
import toast from 'react-hot-toast';

const PromoterPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error('Please select a file before uploading.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await bulkUploadPromoter(formData);
      console.log('Bulk Upload Response:', response);
      toast.success('Promoters uploaded successfully!');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Bulk upload failed:', error);
      toast.error('Upload failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Promoter Network</h1>

      {/* Top Promoters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Top Promoters</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700"
          >
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

      {/* Other Promoters */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Promoters</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-xs text-gray-600 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3">Promoter Name</th>
                <th className="px-6 py-3">Contact No.</th>
                <th className="px-6 py-3">Leads</th>
                <th className="px-6 py-3">Conversion Rate</th>
                <th className="px-6 py-3">Last Follow-Up</th>
                <th className="px-6 py-3">Revenue Generated</th>
                <th className="px-6 py-3">Referrer Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  name: 'Priya Sharma',
                  contact: '9876543210',
                  leads: 73,
                  conversion: '28%',
                  lastFollowUp: '2025-04-20',
                  revenue: '$730',
                  status: 'Active',
                },
                {
                  name: 'Ravi Mehra',
                  contact: '9123456780',
                  leads: 65,
                  conversion: '25%',
                  lastFollowUp: '2025-04-18',
                  revenue: '$650',
                  status: 'Inactive',
                },
                {
                  name: 'Neha Kapoor',
                  contact: '9988776655',
                  leads: 58,
                  conversion: '22%',
                  lastFollowUp: '2025-04-17',
                  revenue: '$580',
                  status: 'Active',
                },
                {
                  name: 'Arjun Das',
                  contact: '9090909090',
                  leads: 52,
                  conversion: '30%',
                  lastFollowUp: '2025-04-19',
                  revenue: '$520',
                  status: 'Pending',
                },
                {
                  name: 'Sneha Reddy',
                  contact: '9876102030',
                  leads: 80,
                  conversion: '35%',
                  lastFollowUp: '2025-04-21',
                  revenue: '$800',
                  status: 'Active',
                },
                {
                  name: 'Kunal Roy',
                  contact: '9543210876',
                  leads: 45,
                  conversion: '20%',
                  lastFollowUp: '2025-04-16',
                  revenue: '$450',
                  status: 'Inactive',
                },
                {
                  name: 'Isha Verma',
                  contact: '9001234567',
                  leads: 66,
                  conversion: '26%',
                  lastFollowUp: '2025-04-22',
                  revenue: '$660',
                  status: 'Active',
                },
                {
                  name: 'Aman Yadav',
                  contact: '8855221133',
                  leads: 39,
                  conversion: '19%',
                  lastFollowUp: '2025-04-14',
                  revenue: '$390',
                  status: 'Pending',
                },
                {
                  name: 'Divya Chauhan',
                  contact: '8112233445',
                  leads: 71,
                  conversion: '29%',
                  lastFollowUp: '2025-04-23',
                  revenue: '$710',
                  status: 'Active',
                },
                {
                  name: 'Varun Sethi',
                  contact: '7665443322',
                  leads: 60,
                  conversion: '24%',
                  lastFollowUp: '2025-04-20',
                  revenue: '$600',
                  status: 'Inactive',
                },
                {
                  name: 'Tanvi Joshi',
                  contact: '9988221100',
                  leads: 49,
                  conversion: '21%',
                  lastFollowUp: '2025-04-15',
                  revenue: '$490',
                  status: 'Pending',
                },
              ].map((promoter, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">{promoter.name}</td>
                    <td className="px-6 py-4 text-gray-600">{promoter.contact}</td>
                    <td className="px-6 py-4 text-gray-600">{promoter.leads}</td>
                    <td className="px-6 py-4 text-gray-600">{promoter.conversion}</td>
                    <td className="px-6 py-4 text-gray-600">{promoter.lastFollowUp}</td>
                    <td className="px-6 py-4 text-gray-600">{promoter.revenue}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${promoter.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : promoter.status === 'Inactive'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-yellow-100 text-yellow-700'
                          }`}
                      >
                        {promoter.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-indigo-600 hover:underline text-sm font-medium">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>


      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Bulk Upload Promoters</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                  Select CSV or Excel file
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept=".csv,.xlsx"
                  onChange={handleFileChange}
                  className="mt-2 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md text-sm mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromoterPage;
