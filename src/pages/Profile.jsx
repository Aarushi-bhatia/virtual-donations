import React, { useState } from 'react';

const UserProfile = () => {
  // Sample user data
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "(555) 123-4567",
    address: "123 Main Street, Apt 4B, Boston, MA 02108",
    joinDate: "September 2023",
    profileImage: "img/Alex.png",
    preferences: {
      emailUpdates: true,
      monthlyReports: true,
      emergencyAlerts: true,
      donationReceipts: true
    },
    taxInformation: {
      taxReceiptsEmail: "alex.johnson@example.com"
    }
  });

  // State for edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState(userData);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setUpdatedUserData({
        ...updatedUserData,
        [section]: {
          ...updatedUserData[section],
          [field]: type === 'checkbox' ? checked : value
        }
      });
    } else {
      setUpdatedUserData({
        ...updatedUserData,
        [name]: value
      });
    }
  };

  // Save profile changes
  const handleSaveChanges = () => {
    setUserData(updatedUserData);
    setIsEditing(false);
    // In a real app, this would send data to the server
    alert("Profile updated successfully!");
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setUpdatedUserData(userData);
    setIsEditing(false);
  };

  // Sample donation history
  const donationHistory = [
    {
      id: 1,
      date: "March 15, 2025",
      cause: "Clean Water Initiative",
      amount: 25.00,
      type: "Recurring",
      status: "Completed"
    },
    {
      id: 2,
      date: "March 3, 2025",
      cause: "Education Fund",
      amount: 50.00,
      type: "Recurring",
      status: "Completed"
    },
    {
      id: 3,
      date: "February 14, 2025",
      cause: "Emergency Relief",
      amount: 100.00,
      type: "One-time",
      status: "Completed"
    },
    {
      id: 4,
      date: "February 3, 2025",
      cause: "Education Fund",
      amount: 50.00,
      type: "Recurring",
      status: "Completed"
    },
    {
      id: 5,
      date: "January 15, 2025",
      cause: "Clean Water Initiative",
      amount: 25.00,
      type: "Recurring",
      status: "Completed"
    }
  ];

  // Sample impact statistics
  const impactStats = [
    { label: "Total Donated", value: "$520.00" },
    { label: "Causes Supported", value: "3" },
    { label: "People Impacted", value: "42" },
    { label: "Years as Donor", value: "1.5" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 p-6 md:p-8 flex items-center justify-center md:justify-start">
              <img 
                className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white shadow-lg" 
                src={userData.profileImage} 
                alt="Profile" 
              />
            </div>
            <div className="p-6 md:p-8 md:flex md:justify-between md:items-center w-full">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
                <p className="text-gray-600">Member since {userData.joinDate}</p>
                <div className="mt-2 flex items-center">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    Monthly Donor
                  </span>
                  <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                    Impact Leader
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                {!isEditing ? (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex space-x-3">
                    <button 
                      onClick={handleCancelEdit}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleSaveChanges}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Impact Summary */}
        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {impactStats.map((stat, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-xl md:text-2xl font-bold text-blue-700">{stat.value}</p>
                  <p className="text-sm text-blue-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Information */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
                {!isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Full Name</p>
                      <p className="mt-1">{userData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="mt-1">{userData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Phone</p>
                      <p className="mt-1">{userData.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Address</p>
                      <p className="mt-1">{userData.address}</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={updatedUserData.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={updatedUserData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={updatedUserData.phone}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <textarea
                        name="address"
                        id="address"
                        rows="2"
                        value={updatedUserData.address}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Communication Preferences</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="preferences.emailUpdates"
                        name="preferences.emailUpdates"
                        type="checkbox"
                        checked={isEditing ? updatedUserData.preferences.emailUpdates : userData.preferences.emailUpdates}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="preferences.emailUpdates" className="font-medium text-gray-700">Email Updates</label>
                      <p className="text-gray-500">Receive organization news and updates</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="preferences.monthlyReports"
                        name="preferences.monthlyReports"
                        type="checkbox"
                        checked={isEditing ? updatedUserData.preferences.monthlyReports : userData.preferences.monthlyReports}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="preferences.monthlyReports" className="font-medium text-gray-700">Monthly Reports</label>
                      <p className="text-gray-500">Receive monthly impact reports</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="preferences.emergencyAlerts"
                        name="preferences.emergencyAlerts"
                        type="checkbox"
                        checked={isEditing ? updatedUserData.preferences.emergencyAlerts : userData.preferences.emergencyAlerts}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="preferences.emergencyAlerts" className="font-medium text-gray-700">Emergency Alerts</label>
                      <p className="text-gray-500">Receive notifications for urgent needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="preferences.donationReceipts"
                        name="preferences.donationReceipts"
                        type="checkbox"
                        checked={isEditing ? updatedUserData.preferences.donationReceipts : userData.preferences.donationReceipts}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="preferences.donationReceipts" className="font-medium text-gray-700">Donation Receipts</label>
                      <p className="text-gray-500">Receive receipts after each donation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Donation History & Tax Info */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Donation History</h2>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View All →
                  </a>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cause</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {donationHistory.map((donation) => (
                        <tr key={donation.id}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{donation.date}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{donation.cause}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">${donation.amount.toFixed(2)}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{donation.type}</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {donation.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                            <a href="#">View</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Tax Information */}
            <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Tax Information</h2>
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">
                    All donations are tax-deductible. Annual tax receipts are sent in January for the previous year's donations.
                  </p>
                  {!isEditing ? (
                    <div>
                      <p className="text-sm font-medium text-gray-500">Tax Receipt Email</p>
                      <p className="mt-1">{userData.taxInformation.taxReceiptsEmail}</p>
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="taxInformation.taxReceiptsEmail" className="block text-sm font-medium text-gray-700">
                        Tax Receipt Email
                      </label>
                      <input
                        type="email"
                        name="taxInformation.taxReceiptsEmail"
                        id="taxInformation.taxReceiptsEmail"
                        value={updatedUserData.taxInformation.taxReceiptsEmail}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  )}
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="text-md font-medium text-blue-800 mb-2">Download Annual Tax Receipts</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">2024 Tax Receipt (Year to date)</span>
                      <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
                        Download
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">2023 Tax Receipt</span>
                      <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connected Accounts */}
            <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Connected Payment Methods</h2>
                <div className="mb-4">
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-2 mr-3">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-gray-500">Expires 12/26</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                      Default
                    </span>
                  </div>
                </div>
                
                <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Add Payment Method
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-md font-medium text-gray-700 mb-3">Password</h3>
                <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Change Password
                </button>
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-700 mb-3">Two-Factor Authentication</h3>
                <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Enable 2FA
                </button>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-md font-medium text-red-600 mb-3">Danger Zone</h3>
              <button className="px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Deactivate Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;