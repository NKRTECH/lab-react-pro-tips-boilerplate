import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Formm from './pages/Formm';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/formm' element={<Formm />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
