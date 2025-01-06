import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  );
}

export default App;