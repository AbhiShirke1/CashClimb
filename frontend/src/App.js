import logo from './logo.svg';
import './App.css';
import {io} from 'socket.io-client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} >
            <Route index element={<Home />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
