import React, { useEffect, useState } from 'react';
import { getBusinessOwnerForm, createBusinessOwner } from '../api/authApi.jsx';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BusinessOwnerForm = () => {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await getBusinessOwnerForm();
        setFormData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch business owner form:', err);
        setError('Failed to load form data.');
        setLoading(false);
      }
    };

    fetchFormData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);
    try {
      await createBusinessOwner(formData);
      setSubmitSuccess('Business owner created successfully!');
      navigate('/owner-details'); // Redirect to owner details page after successful submission
    } catch (err) {
      console.error('Failed to create business owner:', err);
      setSubmitError('Failed to create business owner.');
    }
  };

  if (error) {
    return (
      <div className="text-red-600 bg-red-100 border border-red-200 p-4 rounded-md w-fit mx-auto mt-10">
        {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <Loader2 className="animate-spin text-indigo-600 w-6 h-6" />
        <span className="ml-2 text-gray-700">Loading form data...</span>
      </div>
    );
  }

  if (!formData) {
    return null;
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Business Owner Information</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize">
              {key.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              id={key}
              name={key}
              type="text"
              value={formData[key] || ''}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-md transition duration-200"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => navigate('/owner-details')}
          className="mt-2 block bg-gray-100 hover:bg-gray-200 text-indigo-700 font-medium px-6 py-2 rounded-md transition duration-200"
        >
          View Saved Owner Details
        </button>
        {submitError && <p className="text-red-600">{submitError}</p>}
        {submitSuccess && <p className="text-green-600">{submitSuccess}</p>}
      </form>
    </div>
  );
};

export default BusinessOwnerForm;
