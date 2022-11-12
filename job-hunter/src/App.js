import './App.css';
import Feed from './Components/User/Feeds/Feed';
import Hero from './Components/User/Hero/Hero';
import Login from './Components/User/Login/Login';
import Signup from './Components/User/Signup/Signup';
import { Routes, Route } from "react-router-dom";
import UserRoutes from './UserRoutes';
import AdminLogin from './Components/Admin/Login/AdminLogin';
import AdminHome from './Components/Admin/AdminHome/AdminHome';
import AdminRoutes from './AdminRoutes';



function App() {
  return (
    <div  className="wrapper">
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Hero />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Login />} path="/login" />
        <Route element={<UserRoutes />}>
          <Route element={<Feed />} path="/Home" />
        </Route>
      </Routes>

      

      <Routes>
        <Route element={<AdminLogin />} path="/admin" />
        <Route element={< AdminRoutes/>}>
          <Route element={<AdminHome />} path="/adminhome" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
