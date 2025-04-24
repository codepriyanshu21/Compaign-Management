import React, { useEffect, useState } from 'react';
import { getBusinessOwnerForm } from '../api/authApi';
import { Building2, Mail, Phone, MapPin, User } from 'lucide-react';

const iconMap = {
  business_name: <Building2 className="w-5 h-5 text-indigo-600" />,
  business_email: <Mail className="w-5 h-5 text-indigo-600" />,
  business_phno: <Phone className="w-5 h-5 text-indigo-600" />,
  city: <MapPin className="w-5 h-5 text-indigo-600" />,
  state: <MapPin className="w-5 h-5 text-indigo-600" />,
  zip_code: <MapPin className="w-5 h-5 text-indigo-600" />,
  tone_of_communication: <User className="w-5 h-5 text-indigo-600" />,
  response_style: <User className="w-5 h-5 text-indigo-600" />,
};

const BusinessOwnerDetails = () => {
  const [ownerData, setOwnerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOwnerDetails = async () => {
      try {
        const res = await getBusinessOwnerForm();
        setOwnerData(res.data);
      } catch (err) {
        setError('Failed to fetch business owner details.');
      } finally {
        setLoading(false);
      }
    };

    fetchOwnerDetails();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-48 text-indigo-600 font-semibold">
        Loading business owner details...
      </div>
    );

  if (error)
    return (
      <p className="text-red-500 bg-red-100 border border-red-200 p-4 rounded-md text-center mt-10">
        {error}
      </p>
    );

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Business Owner Profile
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(ownerData).map(([key, value]) => (
          <div
            key={key}
            className="flex items-start gap-3 border p-3 rounded-md hover:shadow transition"
          >
            <div className="mt-1">{iconMap[key] || <User className="w-5 h-5 text-indigo-600" />}</div>
            <div>
              <p className="text-sm text-gray-500 capitalize">{key.replace(/_/g, ' ')}</p>
              <p className="text-base font-medium text-gray-800">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessOwnerDetails;
