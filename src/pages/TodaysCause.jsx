import React, { useState, useRef } from 'react';

const TodaysCause = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCause, setSelectedCause] = useState(null);
  const scrollContainerRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Categories with their associated causes
  const categories = [
    {
      id: 'medical',
      name: 'Medical',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'bg-red-100 text-red-800',
      hoverColor: 'hover:bg-red-600',
    },
    {
      id: 'education',
      name: 'Education',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      color: 'bg-blue-100 text-blue-800',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      id: 'environment',
      name: 'Environment',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-green-100 text-green-800',
      hoverColor: 'hover:bg-green-600',
    },
    {
      id: 'disaster',
      name: 'Disaster Relief',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'bg-orange-100 text-orange-800',
      hoverColor: 'hover:bg-orange-600',
    },
    {
      id: 'community',
      name: 'Community',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'bg-purple-100 text-purple-800',
      hoverColor: 'hover:bg-purple-600',
    },
  ];

  const causes = [
    // Medical causes
    {
      id: 1,
      category: 'medical',
      title: "Sara's Cancer Treatment",
      description: "Help Sara, a 12-year-old, access specialized cancer treatment not covered by insurance.",
      goalAmount: 50000,
      raisedAmount: 32450,
      daysLeft: 14,
      location: "Boston, MA",
      image: "img/sara.jpg",
      urgency: "High",
    },
    {
      id: 2,
      category: 'medical',
      title: "Life-Saving Heart Surgery",
      description: "Support Martin's emergency heart surgery and recovery expenses.",
      goalAmount: 35000,
      raisedAmount: 12780,
      daysLeft: 21,
      location: "Chicago, IL",
      image: "img/martin.jpg",
      urgency: "Critical",
    },
    {
      id: 3,
      category: 'medical',
      title: "Community Health Clinic",
      description: "Help us expand our free health clinic serving low-income families.",
      goalAmount: 75000,
      raisedAmount: 45200,
      daysLeft: 45,
      location: "Detroit, MI",
      image: "img/clinic.jpg",
      urgency: "Medium",
    },
    
    // Education causes
    {
      id: 4,
      category: 'education',
      title: "Scholarships for Rural Students",
      description: "Provide college scholarships for talented students from underserved rural areas.",
      goalAmount: 45000,
      raisedAmount: 28600,
      daysLeft: 30,
      location: "Appalachia Region",
      image: "img/students.jpg",
      urgency: "Medium",
    },
    {
      id: 5,
      category: 'education',
      title: "STEM Learning Lab",
      description: "Build a modern STEM laboratory for an underresourced public school.",
      goalAmount: 30000,
      raisedAmount: 18450,
      daysLeft: 60,
      location: "New Orleans, LA",
      image: "/api/placeholder/400/240",
      urgency: "Medium",
    },
    {
      id: 6,
      category: 'education',
      title: "Books for Children",
      description: "Provide reading materials for 1,000 children in low-income neighborhoods.",
      goalAmount: 15000,
      raisedAmount: 8200,
      daysLeft: 35,
      location: "Multiple Cities",
      image: "/api/placeholder/400/240",
      urgency: "Low",
    },
    
    // Environment causes
    {
      id: 7,
      category: 'environment',
      title: "Coastal Cleanup Initiative",
      description: "Remove plastic waste from 10 miles of endangered coastline.",
      goalAmount: 25000,
      raisedAmount: 16400,
      daysLeft: 40,
      location: "Gulf Coast",
      image: "/api/placeholder/400/240",
      urgency: "Medium",
    },
    {
      id: 8,
      category: 'environment',
      title: "Reforestation Project",
      description: "Plant 10,000 native trees in areas affected by wildfires.",
      goalAmount: 40000,
      raisedAmount: 32100,
      daysLeft: 25,
      location: "Western States",
      image: "/api/placeholder/400/240",
      urgency: "High",
    },
    
    // Disaster Relief causes
    {
      id: 9,
      category: 'disaster',
      title: "Hurricane Recovery Fund",
      description: "Provide immediate assistance to families displaced by recent hurricanes.",
      goalAmount: 100000,
      raisedAmount: 78400,
      daysLeft: 10,
      location: "Florida Coast",
      image: "/api/placeholder/400/240",
      urgency: "Critical",
    },
    {
      id: 10,
      category: 'disaster',
      title: "Earthquake Relief",
      description: "Supply emergency housing and food for earthquake survivors.",
      goalAmount: 85000,
      raisedAmount: 51200,
      daysLeft: 15,
      location: "International",
      image: "/api/placeholder/400/240",
      urgency: "Critical",
    },
    
    // Community causes
    {
      id: 11,
      category: 'community',
      title: "Homeless Shelter Expansion",
      description: "Add 50 new beds to our local homeless shelter for the winter season.",
      goalAmount: 60000,
      raisedAmount: 34800,
      daysLeft: 30,
      location: "Minneapolis, MN",
      image: "/api/placeholder/400/240",
      urgency: "High",
    },
    {
      id: 12,
      category: 'community',
      title: "Community Garden Project",
      description: "Transform vacant lot into productive garden in food desert neighborhood.",
      goalAmount: 20000,
      raisedAmount: 12500,
      daysLeft: 45,
      location: "St. Louis, MO",
      image: "/api/placeholder/400/240",
      urgency: "Medium",
    },
  ];

  // Filter causes based on selected category
  const filteredCauses = selectedCategory === 'all' 
    ? causes 
    : causes.filter(cause => cause.category === selectedCategory);

  const getCauseById = (id) => {
    // For the demo, always return Sara's cause (id: 1) regardless of which card is clicked
    return causes.find(cause => cause.id === 1);
  };

  const handleSelectCause = () => {
    // Always select Sara's cause (id: 1)
    setSelectedCause(1);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedCause(null);
  };

  const getUrgencyBadgeColor = (urgency) => {
    switch(urgency) {
      case 'Critical':
        return 'bg-red-100 text-red-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Sara's cause details for the detailed view
  const saraCause = causes[0];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose a Cause</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse causes that need your support today. Your donation will make a direct impact on the lives of those in need.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        <button
          onClick={() => handleCategoryChange('all')}
          className={`px-4 py-2 rounded-full transition duration-200 ${
            selectedCategory === 'all' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-100 text-gray-800 hover:bg-indigo-100'
          }`}
        >
          All Causes
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`flex items-center px-4 py-2 rounded-full transition duration-200 ${
              selectedCategory === category.id 
                ? 'bg-indigo-600 text-white' 
                : `${category.color} ${category.hoverColor.replace('hover:bg-', 'hover:bg-').replace('-600', '-100')}`
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Causes - Detailed View or Scrollable Cards */}
      {selectedCause ? (
        // Detailed view of Sara's cause
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={saraCause.image} 
                alt={saraCause.title}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{saraCause.title}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyBadgeColor(saraCause.urgency)}`}>
                  {saraCause.urgency} Priority
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">{saraCause.description}</p>
              
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">{saraCause.location}</span>
              </div>
              
              <div className="flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">{saraCause.daysLeft} days left</span>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">Raised: ${saraCause.raisedAmount.toLocaleString()}</span>
                  <span className="text-sm font-medium">${saraCause.goalAmount.toLocaleString()} Goal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full" 
                    style={{ width: `${(saraCause.raisedAmount / saraCause.goalAmount) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200">
                  Support This Cause
                </button>
                <button 
                  onClick={() => setSelectedCause(null)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition duration-200"
                >
                  Back to All Causes
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Horizontal scrollable cards view
        <div className="relative">
          {/* Left scroll button */}
          {filteredCauses.length > 3 && (
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 pt-2 px-4 -mx-4 snap-x scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredCauses.length > 0 ? (
              filteredCauses.map((cause) => (
                <div 
                  key={cause.id}
                  className="flex-none w-80 mr-4 snap-start bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-200"
                >
                  <img 
                    src={cause.image} 
                    alt={cause.title}
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{cause.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyBadgeColor(cause.urgency)}`}>
                        {cause.urgency}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{cause.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-500">${cause.raisedAmount.toLocaleString()} raised</span>
                        <span className="font-medium">${cause.goalAmount.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full" 
                          style={{ width: `${(cause.raisedAmount / cause.goalAmount) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {cause.location}
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {cause.daysLeft} days left
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleSelectCause}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center w-full py-12">
                <div className="text-center">
                  <div className="text-indigo-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No causes found</h3>
                  <p className="text-gray-600">Try selecting a different category or check back soon for new causes.</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Right scroll button */}
          {filteredCauses.length > 3 && (
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
      
      {/* Category description */}
      {selectedCategory !== 'all' && filteredCauses.length > 0 && !selectedCause && (
        <div className="mt-8 bg-indigo-50 rounded-lg p-4">
          <h3 className="font-medium text-indigo-800 mb-1">
            {categories.find(cat => cat.id === selectedCategory)?.name} Causes
          </h3>
          <p className="text-indigo-700 text-sm">
            {selectedCategory === 'medical' && "Support medical treatments, healthcare access, and health-related initiatives for those in need."}
            {selectedCategory === 'education' && "Help provide educational resources, school supplies, scholarships, and learning opportunities."}
            {selectedCategory === 'environment' && "Contribute to conservation efforts, pollution reduction, and sustainable environmental practices."}
            {selectedCategory === 'disaster' && "Aid communities affected by natural disasters, conflicts, and humanitarian crises."}
            {selectedCategory === 'community' && "Support local initiatives that strengthen communities and improve quality of life."}
          </p>
        </div>
      )}
    </div>
  );
};

export default TodaysCause;