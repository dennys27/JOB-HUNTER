import './App.css';
import Feed from './Components/User/Feeds/Feed';
import Hero from './Components/User/Hero/Hero';
import Login from './Components/User/Login/Login';
import Signup from './Components/User/Signup/Signup';
import { Routes, Route } from "react-router-dom";
import UserRoutes, { UserRoutesTwo } from './UserRoutes';
import AdminLogin from './Components/Admin/Login/AdminLogin';
import AdminHome from './Components/Admin/AdminHome/AdminHome';
import AdminRoutes, { AdminRoutesTwo } from './AdminRoutes';
import Jobs from './Components/User/Jobs/Jobs';
import Profile from './Components/User/Profile/Profile';
import Jobpost from './Components/User/Jobpost/Jobpost';
import JobView from './Components/User/Jobs/Jobview/JobView';




function App() {
  return (
    <div className="wrapper">
      {/* <Navbar /> */}
      <Routes>
        <Route element={<UserRoutes />}>
          <Route element={<Feed />} path="/Home" />
          <Route element={<Jobs />} path="/Jobs" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Jobpost />} path="/jobpost" />
          <Route element={<JobView />} path="/jobview" />
        </Route>

        <Route element={<UserRoutesTwo />}>
          <Route element={<Hero />} path="/" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Login />} path="/login" />
        </Route>
      </Routes>

      <Routes>
        <Route element={<AdminRoutesTwo />}>
          <Route element={<AdminLogin />} path="/admin" />
        </Route>
        <Route element={<AdminRoutes />}>
          <Route element={<AdminHome />} path="/adminhome" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
