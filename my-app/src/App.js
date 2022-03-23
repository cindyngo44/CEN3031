import './App.css';
import About from  './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import LoginNow from './components/LoginNow';
import Register from './components/Register';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import NavbarUser from './components/Navbar-User';
import MusicWidget from './components/SeshComponents/MusicWidget';
import Sesh from './components/Sesh';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faBars);

function App() {
  return (
    <div> 
      <Router> {/* Router lets page render different components based on address path */}
        
      <Routes> {/* Routes contained  for router  */}
       <Route path="/" element={<Home />} /> 
      <Route path="/About" element={<About/>} />
      <Route path="/Login" element={<LoginNow/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/NavbarUser" element={<NavbarUser/>} />
      <Route path="/Sesh" element={<Sesh/>} />
      <Route path="/MusicWidget" element={<MusicWidget/>} />
      <Route path="/Profile" element={<Profile/>} />
      </Routes>

    </Router>  
     
    
    
    </div>
   );
}

export default App;
