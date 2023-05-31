

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.scss';

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  
  );
}

export default App;
