import './App.css';
 import About from  './components/About';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Home from './components/Home';
 import Login from './components/Login';
 import LoginNow from './components/LoginNow';
 import Register from './components/Register';
import Navbar from './components/Navbar';
import Sesh from './components/Sesh';
import DefaultTimer from './components/DefaultTimer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faBars);

function App() {
  return (
    <div> 
       <Router> {/* Router lets page render different components based on address path */}
        
       <Navbar/> {/* Navbar component above every page  */}
        
      <Routes> {/* Routes contained  for router  */}
       <Route path="/" element={<Home />} /> 
      <Route path="/About" element={<About/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/LoginNow" element={<LoginNow/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Sesh" element={<Sesh/>} />
      <Route path="/DefaultTimer" element={<DefaultTimer/>} />
      {/*<Route path="/MusicWidget" element={<MusicWidget/>} />*/}
      </Routes>

    </Router>  
     
    
    
    </div>
   );
}

export default App;
