import logo from './logo.svg';
import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
