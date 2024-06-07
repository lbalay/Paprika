
import './App.css';
import CityPage from './components/CityPage';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city/:state" element={<CityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
