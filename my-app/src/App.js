import logo from './logo.svg';
import './App.css';
// import About from  './components/about';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="Home">
      {/* <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      </Routes>
    </Router>  */}
      <header className="home-header">
        <div id="navbar"></div>
        <img src={logo} className="sesh-logo" alt="logo" />
      </header>
      <h1>Welcome to Sesh</h1>
      <p>Study amoung us</p>
      <button className="btn login-register">Login/Register</button>
      <br />
      <button className="btn about-us">About Us</button>
    
    {/* <Link to="/About" >About</Link>       */}
    
    </div>
  );
}

export default App;
