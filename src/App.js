import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom';
import Navbar from './Compenents/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { useContext } from 'react';
import { DarkModeContext } from './Context/DarkModeContex';

function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? `App bg-slate-800` : `App bg-white`} >
      
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
