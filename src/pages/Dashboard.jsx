import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  BookOpen,
  Award,
  Heart,
  Calendar,
  Mail,
  Gift,
  GraduationCap,
  DollarSign,
} from "lucide-react";

const StudentSponsorshipDashboard = () => {
  const [timeframe, setTimeframe] = useState("semester");

  // Student information
  const studentInfo = {
    name: "Maria Gonzalez",
    age: 12,
    grade: "7th Grade",
    school: "Lincoln Middle School",
    location: "Nairobi, Kenya",
    sponsoredSince: "August 2024",
    nextUpdate: "April 15, 2025",
    profileImage: "img/maria.jpg",
  };

  // Academic performance data
  const academicData = [
    { subject: "Math", previous: 78, current: 86 },
    { subject: "Science", previous: 82, current: 88 },
    { subject: "English", previous: 75, current: 81 },
    { subject: "History", previous: 80, current: 85 },
    { subject: "Art", previous: 90, current: 92 },
  ];

  // Attendance data
  const attendanceData = [
    { month: "Sep", attendance: 95 },
    { month: "Oct", attendance: 98 },
    { month: "Nov", attendance: 96 },
    { month: "Dec", attendance: 92 },
    { month: "Jan", attendance: 97 },
    { month: "Feb", attendance: 99 },
    { month: "Mar", attendance: 98 },
  ];

  // Donation allocation
  const donationAllocation = [
    { name: "Tuition", value: 45 },
    { name: "Books & Supplies", value: 20 },
    { name: "Meals", value: 15 },
    { name: "Uniform", value: 10 },
    { name: "Healthcare", value: 10 },
  ];

  // Recent updates
  const recentUpdates = [
    {
      id: 1,
      type: "achievement",
      description: "Won first place in the school science fair",
      date: "Mar 15",
    },
    {
      id: 2,
      type: "milestone",
      description: "Completed English language certification",
      date: "Feb 28",
    },
    {
      id: 3,
      type: "letter",
      description: "New letter from Maria is available to read",
      date: "Feb 10",
    },
    {
      id: 4,
      type: "report",
      description: "Term report card uploaded",
      date: "Jan 25",
    },
  ];

  // Upcoming events
  const upcomingEvents = [
    { id: 1, title: "School Sports Day", date: "Apr 12, 2025" },
    { id: 2, title: "End of Term Exams", date: "May 15-20, 2025" },
    { id: 3, title: "Annual School Exhibition", date: "Jun 5, 2025" },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  // Calculate average improvement
  const calculateImprovement = () => {
    let totalImprovement = 0;
    academicData.forEach((subject) => {
      totalImprovement += subject.current - subject.previous;
    });
    return (totalImprovement / academicData.length).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold text-white">
              Student Sponsorship Dashboard
            </h1>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium ${timeframe === "month" ? "bg-white text-blue-600" : "bg-blue-500 text-white"}`}
                onClick={() => setTimeframe("month")}
              >
                Monthly
              </button>
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium ${timeframe === "semester" ? "bg-white text-blue-600" : "bg-blue-500 text-white"}`}
                onClick={() => setTimeframe("semester")}
              >
                Semester
              </button>
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium ${timeframe === "year" ? "bg-white text-blue-600" : "bg-blue-500 text-white"}`}
                onClick={() => setTimeframe("year")}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Student Profile */}
        <div className="bg-white overflow-hidden shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 flex justify-center mb-4 md:mb-0">
                <img
                  src={studentInfo.profileImage}
                  alt={studentInfo.name}
                  className="h-32 w-32 rounded-full"
                />
              </div>
              <div className="md:ml-6 flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {studentInfo.name}
                    </h2>
                    <p className="text-gray-600">
                      {studentInfo.age} years old | {studentInfo.grade}
                    </p>
                    <p className="text-gray-600">{studentInfo.school}</p>
                    <p className="text-gray-600">{studentInfo.location}</p>
                    <p className="mt-2 text-sm text-blue-600">
                      Sponsored since: {studentInfo.sponsoredSince}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-start md:items-end">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Mail className="mr-1 h-4 w-4" />
                      <span>Next update: {studentInfo.nextUpdate}</span>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Message
                      </button>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                        <Gift className="mr-2 h-4 w-4" />
                        Send Gift
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Academic Average
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        86.4%
                      </div>
                      <div className="ml-2 flex items-center text-sm font-semibold text-green-600">
                        <span className="sr-only">Increased by</span>+
                        {calculateImprovement()}%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Attendance Rate
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        97%
                      </div>
                      <div className="ml-2 flex items-center text-sm font-semibold text-green-600">
                        <span className="sr-only">Increased by</span>
                        +2%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Achievements
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        8
                      </div>
                      <div className="ml-2 flex items-center text-sm font-semibold text-green-600">
                        <span className="sr-only">Increased by</span>
                        +3 this term
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-red-500 rounded-md p-3">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Your Impact
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        7 months
                      </div>
                      <div className="ml-2 flex items-center text-sm font-semibold text-gray-600">
                        <span className="sr-only">Duration</span>
                        of support
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Academic Progress
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={academicData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="subject" type="category" width={80} />
                <Tooltip />
                <Legend />
                <Bar dataKey="previous" name="Previous Term" fill="#94a3b8" />
                <Bar dataKey="current" name="Current Term" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Attendance Tracking
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[85, 100]} />
                <Tooltip formatter={(value) => [`${value}%`, "Attendance"]} />
                <Line
                  type="monotone"
                  dataKey="attendance"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-8">
          {/* Donation Allocation */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Your Donation Allocation
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={donationAllocation}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {donationAllocation.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Allocation"]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
                <DollarSign className="h-4 w-4 mr-1" />
                Make additional donation
              </button>
            </div>
          </div>

          {/* Recent Updates */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Recent Updates
            </h2>
            <div className="space-y-4">
              {recentUpdates.map((update) => (
                <div key={update.id} className="flex">
                  <div className="flex-shrink-0">
                    {update.type === "achievement" && (
                      <Award className="h-5 w-5 text-yellow-400" />
                    )}
                    {update.type === "milestone" && (
                      <GraduationCap className="h-5 w-5 text-blue-400" />
                    )}
                    {update.type === "letter" && (
                      <Mail className="h-5 w-5 text-green-400" />
                    )}
                    {update.type === "report" && (
                      <BookOpen className="h-5 w-5 text-purple-400" />
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-900">
                      {update.description}
                    </p>
                    <p className="text-xs text-gray-500">{update.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                View all updates
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {event.title}
                    </p>
                    <p className="text-xs text-gray-500">{event.date}</p>
                  </div>
                  <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200">
                    Remind me
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                View school calendar
              </button>
            </div>
          </div>
        </div>

        

        {/* Message from Student */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Latest Message from Maria
          </h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-800 italic">
              "Dear Sponsor, Thank you so much for your support this year.
              Because of you, I have been able to get new books and school
              supplies. My favorite subject is Science, and I got the highest
              grade in my class on our last project! I hope to become a doctor
              one day. Thank you for helping me with my education."
            </p>
            <p className="mt-2 text-right text-sm text-gray-600">
              - Maria, February 10, 2025
            </p>
          </div>
          <div className="mt-4 text-right">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-4 w-4" />
              Reply to Maria
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentSponsorshipDashboard;
