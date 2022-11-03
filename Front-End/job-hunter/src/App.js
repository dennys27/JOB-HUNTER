import './App.css';
import Feed from './Components/User/Feeds/Feed';
import Hero from './Components/User/Hero/Hero';
import Login from './Components/User/Login/Login';
import Navbar from './Components/User/Navbar/Navbar';
import Signup from './Components/User/Signup/Signup';

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Feed/>
      {/* <Hero/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
