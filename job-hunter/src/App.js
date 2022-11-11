import './App.css';
import Feed from './Components/User/Feeds/Feed';
import Hero from './Components/User/Hero/Hero';
import Login from './Components/User/Login/Login';
import Navbar from './Components/User/Navbar/Navbar';
import Signup from './Components/User/Signup/Signup';
import { Routes, Route } from "react-router-dom";
import UserRoutes from './UserRoutes';
import AdminNavbar from './Components/Admin/AdminNavbar/AdminNavbar';
import AdminLogin from './Components/Admin/Login/AdminLogin';
import AdminHome from './Components/Admin/AdminHome/AdminHome';




function App() {
  return (
    <div className="wrapper">
      {/* <Navbar />
      <Routes>
        <Route element={<Hero />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Login />} path="/login" />
        <Route element={<UserRoutes />}>
          <Route element={<Feed />} path="/Home" />
        </Route>
      </Routes> */}
      <AdminNavbar />
      <Routes>
        <Route element={<AdminLogin/>} path="/AdminLogin" />
        <Route element={<UserRoutes />}>
          <Route element={<AdminHome />} path="/AdminHome" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
