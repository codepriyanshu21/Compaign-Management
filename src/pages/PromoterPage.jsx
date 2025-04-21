import React from 'react';

const PromoterPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Promoter Network</h1>
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Top Promoters</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
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
  </div>
);

export default PromoterPage;
