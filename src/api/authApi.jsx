// authAPI.js
import axiosInstance from "./axiosInstance.jsx";

// 1. Login
export const login = (email, password) => 
  axiosInstance.post("/auth/login", { email, password });

// 2. Register
export const register = (data) => 
  axiosInstance.post("/auth/register", data);

// 3. Refresh Token (Explicitly Handling Refresh Logic)
export const refresh = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  if (!refreshToken) {
    console.error("No refresh token found.");
    return null;
  }

  try {
    const response = await axiosInstance.post('/auth/refresh', { refresh: refreshToken });

    // Assuming the response has a new access token
    const { access } = response.data;

    // Store the new access token
    localStorage.setItem('accessToken', access);

    return response.data;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    // Optionally handle errors like expired refresh token
    // You might want to log the user out
    return null;
  }
};

// 4. Verify Token
export const verifyToken = () => axiosInstance.get("/auth/verify-token");

// 5. Create Business Owner
export const getBusinessOwnerForm = () => 
  axiosInstance.get("/auth/create-business-owner");

export const createBusinessOwner = (data) => 
  axiosInstance.post("/auth/create-business-owner", data);

// 6. Create Promoter
export const createPromoter = (data) => 
  axiosInstance.post("/auth/create-promoter", data);

// 7. Bulk Upload Promoters
export const bulkUploadPromoter = (formData) => 
  axiosInstance.post("/auth/bulk-upload-promoters", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// 8. Create Campaign
export const createCampaign = (data) => 
  axiosInstance.post("/campaigns/create-campaign", data);

// 9. Get Campaigns
export const getCampaigns = () => 
  axiosInstance.get("/campaigns/get-all-campaigns");

// 10.get campaign by id

export const getCampaignById = (id) => {
  if (!id) {
    console.error('Invalid campaign ID');
    return Promise.reject('Invalid campaign ID');
  }
  return axiosInstance.get(`/campaigns/get-campaign/${id}`);
};