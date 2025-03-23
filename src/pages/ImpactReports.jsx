import React from 'react';

const ImpactReports = () => {
  // Sample report data - in a real app, this would come from an API or props
  const reports = [
    {
      id: 1,
      title: "Clean Water Initiative",
      location: "East Africa",
      date: "March 2025",
      impact: "Provided clean water access to 12,000 people",
      description: "Your donations helped build 15 new wells and water filtration systems across rural communities.",
      imageSrc: "img/water.jpg",
      donationAmount: "$45,000"
    },
    {
      id: 2,
      title: "Education Scholarships",
      location: "Southeast Asia",
      date: "February 2025",
      impact: "Funded education for 78 underprivileged students",
      description: "These scholarships cover tuition, books, and living expenses for students who otherwise couldn't afford higher education.",
      imageSrc: "img/edu.jpg",
      donationAmount: "$62,500"
    },
    {
      id: 3,
      title: "Disaster Relief",
      location: "Caribbean Islands",
      date: "January 2025",
      impact: "Supported 450 families with emergency supplies",
      description: "After the recent hurricanes, your donations provided food, shelter, and medical supplies to affected communities.",
      imageSrc: "img/images.jpg",
      donationAmount: "$83,750"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Impact Reports</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how your donations are making a difference in communities around the world.
          </p>
          <div className="mt-8 inline-flex items-center justify-center bg-blue-100 rounded-full px-6 py-2">
            <span className="text-blue-800 font-medium">Total Impact: $191,250 donated to 3 initiatives</span>
          </div>
        </div>

        {/* Filter options */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition">
            All Reports
          </button>
          <button className="bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 px-6 py-2 rounded-full transition">
            Water & Sanitation
          </button>
          <button className="bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 px-6 py-2 rounded-full transition">
            Education
          </button>
          <button className="bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 px-6 py-2 rounded-full transition">
            Disaster Relief
          </button>
          <button className="bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 px-6 py-2 rounded-full transition">
            Healthcare
          </button>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report) => (
            <div key={report.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={report.imageSrc} 
                  alt={report.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {report.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{report.title}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {report.location}
                </div>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <div className="text-green-800 font-semibold">{report.impact}</div>
                </div>
                <p className="text-gray-600 mb-4">{report.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-blue-600 font-bold">{report.donationAmount}</span>
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-lg transition">
                    View Full Report
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img src="/api/placeholder/300/300" alt="Testimonial" className="rounded-full w-32 h-32 mx-auto" />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <svg className="h-8 w-8 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 italic text-lg mb-4">
                "Seeing these impact reports gives me confidence that my donations are truly making a difference. The transparency and detail provided helps me understand exactly how my contributions are changing lives."
              </p>
              <p className="text-blue-600 font-semibold">Sarah Johnson</p>
              <p className="text-gray-500">Monthly Donor Since 2023</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Want to contribute to our next impact story?</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors shadow-md">
            Make a Donation Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImpactReports;