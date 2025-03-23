import React, { useState } from 'react';

const RecurringDonations = () => {
  // Sample active recurring donations
  const [donations, setDonations] = useState([
    {
      id: 1,
      cause: "Clean Water Initiative",
      amount: 25,
      frequency: "Monthly",
      nextDate: "April 15, 2025",
      status: "Active",
      started: "January 15, 2025",
      impact: "Provides clean water to 5 people each month"
    },
    {
      id: 2,
      cause: "Education Fund",
      amount: 50,
      frequency: "Monthly",
      nextDate: "April 3, 2025",
      status: "Active",
      started: "October 3, 2024",
      impact: "Supplies educational materials for 2 students"
    },
    {
      id: 3,
      cause: "Emergency Relief",
      amount: 100,
      frequency: "Quarterly",
      nextDate: "June 20, 2025",
      status: "Active",
      started: "March 20, 2024",
      impact: "Supports emergency food supplies for 4 families"
    }
  ]);

  // Donation causes for the new donation form
  const causes = [
    "Clean Water Initiative",
    "Education Fund",
    "Emergency Relief",
    "Healthcare Access",
    "Environmental Conservation",
    "Animal Welfare",
    "Community Development"
  ];

  // State for donation form
  const [newDonation, setNewDonation] = useState({
    cause: causes[0],
    amount: 25,
    frequency: "Monthly"
  });

  // Handle changes in the new donation form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDonation({ ...newDonation, [name]: name === "amount" ? Number(value) : value });
  };

  // Handle donation form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would connect to payment processing
    // Adding a placeholder for demonstration
    alert(`New ${newDonation.frequency} donation of $${newDonation.amount} set up for ${newDonation.cause}`);
  };

  // Handle pausing/resuming a donation
  const toggleDonationStatus = (id) => {
    setDonations(donations.map(donation => 
      donation.id === id 
        ? { ...donation, status: donation.status === "Active" ? "Paused" : "Active" } 
        : donation
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Manage Recurring Donations</h1>
          <p className="text-gray-600 mt-2">Set up and manage your ongoing contributions to causes you care about.</p>
          
          <div className="mt-6 bg-blue-50 rounded-lg p-4 flex items-center">
            <div className="rounded-full bg-blue-100 p-2 mr-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-blue-800">Recurring donations help us plan for the future and maintain consistent support for our programs.</p>
              <p className="text-blue-600 mt-1 text-sm">You can pause or cancel your donations at any time.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Donations Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Active Donations</h2>
              
              {donations.length > 0 ? (
                <div className="space-y-6">
                  {donations.map((donation) => (
                    <div key={donation.id} className={`border rounded-lg p-4 ${donation.status === "Paused" ? "border-gray-200 bg-gray-50" : "border-green-200 bg-green-50"}`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-800">{donation.cause}</h3>
                          <div className="flex items-center mt-1 text-gray-600">
                            <span className="font-semibold text-lg">${donation.amount}</span>
                            <span className="mx-1">•</span>
                            <span>{donation.frequency}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">
                            Started: {donation.started}
                          </p>
                          <p className="text-sm mt-1">
                            Next donation: {donation.status === "Active" ? donation.nextDate : "Paused"}
                          </p>
                          <div className="mt-3 text-sm bg-blue-50 text-blue-700 p-2 rounded">
                            <strong>Impact:</strong> {donation.impact}
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${donation.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                            {donation.status}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end space-x-3">
                        <button 
                          onClick={() => toggleDonationStatus(donation.id)}
                          className={`px-3 py-1 text-sm rounded-md ${donation.status === "Active" 
                            ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200" 
                            : "bg-green-100 text-green-700 hover:bg-green-200"}`}
                        >
                          {donation.status === "Active" ? "Pause" : "Resume"}
                        </button>
                        <button className="px-3 py-1 text-sm rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                          Edit
                        </button>
                        <button className="px-3 py-1 text-sm rounded-md bg-white border border-red-300 text-red-700 hover:bg-red-50">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 border border-dashed rounded-lg">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <p className="mt-2 text-gray-500">You don't have any recurring donations yet.</p>
                </div>
              )}
            </div>

            {/* Donation History */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Donation History</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cause</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Mar 15, 2025</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Clean Water Initiative</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">$25.00</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">View</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Mar 3, 2025</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Education Fund</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">$50.00</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">View</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Feb 15, 2025</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Clean Water Initiative</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">$25.00</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">View</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Feb 3, 2025</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Education Fund</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">$50.00</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">View</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Complete History →
                </button>
              </div>
            </div>
          </div>

          {/* New Donation Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Set Up New Donation</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="cause">
                    Select Cause
                  </label>
                  <select
                    id="cause"
                    name="cause"
                    value={newDonation.cause}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {causes.map((cause) => (
                      <option key={cause} value={cause}>{cause}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="amount">
                    Donation Amount
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      min="5"
                      value={newDonation.amount}
                      onChange={handleInputChange}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Frequency
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Monthly", "Quarterly", "Yearly"].map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          id={option}
                          name="frequency"
                          type="radio"
                          value={option}
                          checked={newDonation.frequency === option}
                          onChange={handleInputChange}
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <label htmlFor={option} className="ml-2 block text-sm text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Your Impact</h3>
                  <p className="text-sm text-gray-600">
                    Your ${newDonation.amount} {newDonation.frequency.toLowerCase()} donation to {newDonation.cause} will make a significant difference.
                  </p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Set Up Recurring Donation
                </button>
              </form>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm text-gray-600">Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Impact */}
        <div className="bg-white rounded-xl shadow-md p-8 mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">The Impact of Your Recurring Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="rounded-full bg-blue-100 p-3 inline-flex mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Sustainable Impact</h3>
              <p className="text-gray-600">Your recurring gifts provide reliable funding that allows us to plan effectively and create lasting change.</p>
            </div>
            
            <div className="text-center p-4">
              <div className="rounded-full bg-green-100 p-3 inline-flex mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Efficiency</h3>
              <p className="text-gray-600">Monthly donations reduce administrative costs, allowing more of your gift to directly support our programs.</p>
            </div>
            
            <div className="text-center p-4">
              <div className="rounded-full bg-purple-100 p-3 inline-flex mb-4">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">Join a community of committed supporters whose collective impact creates meaningful change in people's lives.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Can I change my donation amount?</h3>
              <p className="text-gray-600">Yes, you can adjust your donation amount at any time by editing your recurring donation settings.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">How do I cancel my recurring donation?</h3>
              <p className="text-gray-600">You can pause or cancel your donation at any time by clicking the respective buttons in your active donations list.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Are my donations tax-deductible?</h3>
              <p className="text-gray-600">Yes, all donations are tax-deductible to the extent allowed by law. You'll receive a receipt for each donation.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">How will I know my donation is making an impact?</h3>
              <p className="text-gray-600">We send regular impact reports to all our recurring donors, showing exactly how your contributions are making a difference.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecurringDonations;