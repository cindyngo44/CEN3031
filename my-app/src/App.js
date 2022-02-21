import logo from './logo.svg';
import './App.css';
 import About from  './components/about';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Home from './components/Home';
 import Login from './components/Login';
import Navbar from './components/Navbar';
function App() {
  return (
    <div> 
       <Router>

       <Navbar/>
       
      <Routes>
       <Route path="/" element={<Home />} /> 
      <Route path="/About" element={<About/>} />
      <Route path="/Login" element={<Login/>} />
      </Routes>

    </Router>  
     
    
    
    </div>
   );
}

export default App;
