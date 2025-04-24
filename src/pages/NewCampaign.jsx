import React, { useState } from 'react';
import { createCampaign } from '../api/authApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const NewCampaign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    campaign_name: '',
    campaign_description: '',
    campaign_start_date: '',
    campaign_end_date: '',
    promoter_reward_points: '',
    lead_reward_discount: '',
    target_promoter_type: '',
    status: "Active"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:name==='lead_reward_discount' ? Number(value):value,
    }))
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Submitted campaign:", formData);
    try {
      const res= await createCampaign(formData);
      console.log("Campaign created successfully:", res.data);
      toast.success('Campaign created successfully!');
      setFormData({
        campaign_name: '',
        campaign_description: '',
        campaign_start_date: '',
        campaign_end_date: '',
        promoter_reward_points: '',
        lead_reward_discount: '',
        target_promoter_type: '',
        status: "Active",
      })
      navigate('/campaign'); // Redirect to campaigns page after successful creation
    } catch (error) {
      console.log('Error creating campaign:', error);
      toast.error('Failed to create campaign. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Create New Campaign</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Campaign Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">Campaign Name</label>
          <input
            type="text"
            name="campaign_name"
            value={formData.campaign_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter campaign name"
            required
          />
        </div>

        {/* Campaign Description */}
        <div>
          <label className="block text-sm font-semibold mb-1">Campaign Description</label>
          <textarea
            name="campaign_description"
            value={formData.campaign_description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Describe the campaign"
            rows="3"
            required
          />
        </div>

        {/* Start and End Dates */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-semibold mb-1">Start Date</label>
            <input
              type="date"
              name="campaign_start_date"
              value={formData.campaign_start_date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-semibold mb-1">End Date</label>
            <input
              type="date"
              name="campaign_end_date"
              value={formData.campaign_end_date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        {/* Promoter Reward Points */}
        <div>
          <label className="block text-sm font-semibold mb-1">Promoter Reward Points</label>
          <input
            type="number"
            name="promoter_reward_points"
            value={formData.promoter_reward_points}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter reward points"
            required
          />
        </div>

        {/* Lead Reward Discount */}
        <div>
          <label className="block text-sm font-semibold mb-1">Lead Reward Discount</label>
          <input
            type="number"
            name="lead_reward_discount"
            value={formData.lead_reward_discount}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g. 20% off"
            required
          />
        </div>

        {/* Target Promoter Type */}
        <div>
          <label className="block text-sm font-semibold mb-1">Target Promoter Type</label>
          <input
            type="text"
            name="target_promoter_type"
            value={formData.target_promoter_type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g. Influencer, Affiliate"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-md transition duration-200"
          >
            Launch Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCampaign;
