import React from 'react';

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

export default LabelsPage;
