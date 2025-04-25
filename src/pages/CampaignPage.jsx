import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, Activity, Users } from 'lucide-react';
import { getCampaignById, getCampaigns } from '../api/authApi';
import toast from 'react-hot-toast';

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await getCampaigns();
        const originalData = response.data || [];

        // Simulate status
        const campaignsWithStatus = originalData.map((c, index) => ({
          ...c,
          status: index % 2 === 0 ? 'Active' : 'Inactive', // Alternate status
        }));

        setCampaigns(campaignsWithStatus);
      } catch (error) {
        console.error('Failed to fetch campaigns:', error);
      }
    };

    fetchCampaigns();
  }, []);

  // If no campaigns are fetched, use dummy data
  const dummyCampaigns = [
    {
      campaign_name: 'Summer Sale 2025',
      campaign_description: 'Join our summer sale and earn exciting rewards by promoting our seasonal discounts.',
      campaign_start_date: '2025-06-01',
      campaign_end_date: '2025-08-31',
      promoter_reward_points: 200,
      lead_reward_discount: 25,
      target_promoter_type: 'All Promoters',
      status: 'Active',
    },
    {
      campaign_name: 'Back to School Promotion',
      campaign_description: 'Help students save with our back-to-school deals! Great rewards for all participating promoters.',
      campaign_start_date: '2025-08-01',
      campaign_end_date: '2025-09-30',
      promoter_reward_points: 150,
      lead_reward_discount: 20,
      target_promoter_type: 'New Promoters',
      status: 'Active',
    },
    {
      campaign_name: 'Holiday Deals Campaign',
      campaign_description: 'Promote our exclusive holiday offers and earn rewards! Perfect for influencers and promoters.',
      campaign_start_date: '2025-11-01',
      campaign_end_date: '2025-12-25',
      promoter_reward_points: 300,
      lead_reward_discount: 30,
      target_promoter_type: 'Veteran Promoters',
      status: 'Inactive',
    },
    {
      campaign_name: 'Spring Discount Bonanza',
      campaign_description: 'Get ready for the biggest spring discounts of the year. Join now and start earning rewards!',
      campaign_start_date: '2025-03-01',
      campaign_end_date: '2025-05-31',
      promoter_reward_points: 100,
      lead_reward_discount: 15,
      target_promoter_type: 'Experienced Promoters',
      status: 'Active',
    },
    {
      campaign_name: 'Winter Holiday Specials',
      campaign_description: 'Celebrate the winter holidays with us! Share our holiday specials and earn amazing rewards.',
      campaign_start_date: '2025-12-01',
      campaign_end_date: '2025-12-31',
      promoter_reward_points: 250,
      lead_reward_discount: 20,
      target_promoter_type: 'All Promoters',
      status: 'Inactive',
    },
  ];

  const campaignsToDisplay = campaigns.length > 0 ? campaigns : dummyCampaigns;

  const totalReferrals = campaignsToDisplay.reduce((acc, c) => acc + (c.referrals || 0), 0);
  const activeCount = campaignsToDisplay.filter(c => c.status === 'Active').length;

  // Delete campaign handler
  const handleDelete = async (id) => {
    try {
      await getCampaignById(id);
      toast.success('Campaign deleted successfully!');
      setCampaigns((prev) => prev.filter((campaign) => campaign.campaign_id !== id));
    } catch (error) {
      console.log('Error deleting campaign:', error);
      toast.error('Failed to delete campaign. Please try again.');
    }
  };

  return (
    <div className="p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4">
          <Megaphone className="text-blue-600 w-10 h-10" />
          <div>
            <p className="text-sm text-gray-500">Total Campaigns</p>
            <h3 className="text-xl font-semibold">{campaignsToDisplay.length}</h3>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4">
          <Activity className="text-green-600 w-10 h-10" />
          <div>
            <p className="text-sm text-gray-500">Active Campaigns</p>
            <h3 className="text-xl font-semibold">{activeCount}</h3>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4">
          <Users className="text-purple-600 w-10 h-10" />
          <div>
            <p className="text-sm text-gray-500">Total Referrals</p>
            <h3 className="text-xl font-semibold">{totalReferrals}</h3>
          </div>
        </div>
      </div>

      {/* Header and Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Your Campaigns</h2>
        <Link to="/new-campaign">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
            + New Campaign
          </button>
        </Link>
      </div>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaignsToDisplay.map((campaign, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition duration-300"
          >
            {/* Card Body Split in Two */}
            <div className="flex justify-between gap-4">
              {/* Left: Campaign Info */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{campaign.campaign_name}</h3>
                <p className="text-sm text-gray-600 italic mb-2">{campaign.campaign_description}</p>

                <div className="text-sm text-gray-500 space-y-1">
                  <p><span className="font-medium">Start:</span> {campaign.campaign_start_date}</p>
                  <p><span className="font-medium">End:</span> {campaign.campaign_end_date}</p>
                  <p><span className="font-medium">Promoter Points:</span> {campaign.promoter_reward_points}</p>
                  <p><span className="font-medium">Lead Discount:</span> {campaign.lead_reward_discount}</p>
                  <p><span className="font-medium">Target Type:</span> {campaign.target_promoter_type}</p>
                </div>
              </div>

              {/* Right: Status + Buttons */}
              <div className="flex flex-col justify-between items-end text-right">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${campaign.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-200 text-gray-600'
                    }`}
                >
                  {campaign.status || 'Inactive'}
                </span>

                <div className="mt-10 flex flex-col gap-2">
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">Edit</button>
                  <button
                    onClick={() => handleDelete(campaign.campaign_id)}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignPage;
