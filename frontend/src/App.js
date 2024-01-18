import './App.css';
import {io} from 'socket.io-client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/auth/Sigup/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} >
            {/* <Route index element={<Home />}/> */}
          </Route>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
