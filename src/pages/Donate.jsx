import React, { useState } from 'react';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showImpact, setShowImpact] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500];
  
  const handleAmountSelect = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount('custom');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowImpact(true);
  };

  const getSelectedAmount = () => {
    return amount === 'custom' ? Number(customAmount) : Number(amount);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-900 mb-3">Make a Difference Today</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your contribution creates real impact. Watch exactly how your funds are used and the change you're making in real-time.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {!showImpact ? (
            <div className="md:flex">
              {/* Left Side: Impact Information */}
              <div className="bg-indigo-700 text-white p-8 md:w-2/5">
                <h2 className="text-2xl font-semibold mb-6">Your Impact</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Transparency Promise</h3>
                  <p className="text-indigo-100">Track every dollar of your donation in real-time with our interactive dashboard.</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Fund Allocation</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Direct Programs</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-indigo-900 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Operations</span>
                        <span>10%</span>
                      </div>
                      <div className="w-full bg-indigo-900 rounded-full h-2">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Fundraising</span>
                        <span>5%</span>
                      </div>
                      <div className="w-full bg-indigo-900 rounded-full h-2">
                        <div className="bg-red-400 h-2 rounded-full" style={{ width: '5%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Accountability</h3>
                  <p className="text-indigo-100">Quarterly reports and independent audits available to all donors.</p>
                </div>
              </div>
              
              {/* Right Side: Donation Form */}
              <div className="p-8 md:w-3/5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Donate Now</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2 font-medium">Select Amount</label>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {presetAmounts.map((presetAmount) => (
                        <button
                          key={presetAmount}
                          type="button"
                          className={`py-3 px-4 rounded-lg border ${
                            amount === presetAmount.toString() 
                              ? 'bg-indigo-600 text-white border-indigo-600' 
                              : 'bg-white text-gray-800 border-gray-300 hover:border-indigo-500'
                          }`}
                          onClick={() => handleAmountSelect(presetAmount.toString())}
                        >
                          ${presetAmount}
                        </button>
                      ))}
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="customAmount"
                        checked={amount === 'custom'}
                        onChange={() => setAmount('custom')}
                        className="mr-2"
                      />
                      <label htmlFor="customAmount" className="flex-grow">
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                          <input
                            type="number"
                            placeholder="Custom amount"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2 font-medium">Personal Information</label>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" required />
                      <span className="text-sm text-gray-600">
                        I understand that I will receive quarterly impact reports and access to the real-time donation tracker.
                      </span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
                  >
                    Complete Donation
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank You, {name}!</h2>
                <p className="text-lg text-gray-600 mb-6">Your donation of ${getSelectedAmount()} has been received.</p>
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">Your Impact Dashboard</h3>
                <p className="text-gray-700 mb-4">
                  Here's how your ${getSelectedAmount()} donation will be allocated:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-green-600 font-bold text-2xl mb-1">${(getSelectedAmount() * 0.85).toFixed(2)}</div>
                    <div className="text-gray-700">Direct Programs</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-yellow-600 font-bold text-2xl mb-1">${(getSelectedAmount() * 0.1).toFixed(2)}</div>
                    <div className="text-gray-700">Operations</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-red-600 font-bold text-2xl mb-1">${(getSelectedAmount() * 0.05).toFixed(2)}</div>
                    <div className="text-gray-700">Fundraising</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-2">
                  We've sent a confirmation to {email} with your donation details and access link to your personal impact dashboard.
                </p>
              </div>
              
              <button
                onClick={() => setShowImpact(false)}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Make another donation
              </button>
            </div>
          )}
        </div>
        
        <div className="mt-10 text-center text-gray-600 text-sm">
          <p>Registered non-profit organization. All donations are tax-deductible.</p>
          <p className="mt-1">100% secure payment processing.</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;