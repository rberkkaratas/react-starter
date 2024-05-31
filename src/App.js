import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./container/Home";
import About from "./container/About";
import "./index.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
