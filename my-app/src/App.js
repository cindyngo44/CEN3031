import './App.css';
 import About from  './components/about';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Home from './components/Home';
 import Login from './components/Login';
import Navbar from './components/Navbar';
function App() {
  return (
    <div> 
       <Router> {/* Router lets page render different components based on address path */}
        
       <Navbar/> {/* Navbar component above every page  */}
        
      <Routes> {/* Routes contained  for router  */}
       <Route path="/" element={<Home />} /> 
      <Route path="/About" element={<About/>} />
      <Route path="/Login" element={<Login/>} />
      </Routes>

    </Router>  
     
    
    
    </div>
   );
}

export default App;
