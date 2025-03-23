import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Donate from "./pages/Donate";
import Home from "./pages/Home";
import ImpactReports from "./pages/ImpactReports";
import RecurringDonations from "./pages/ReccurringDonations";
import NavBar from "./pages/Navbar";
import TodaysCause from "./pages/TodaysCause";
import UserProfile from "./pages/Profile";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todayscause" element={<TodaysCause />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/impact-reports" element={<ImpactReports />} />
        <Route path="/recurring-donations" element={<RecurringDonations />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </>
  );
}

export default App;
