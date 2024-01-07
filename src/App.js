import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Rooms from "./components/Rooms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/rooms" element={<Rooms/>}>Rooms</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
