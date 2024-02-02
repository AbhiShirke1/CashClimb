import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SearchPage from './pages/SearchPage';
import Signup from './components/auth/Sigup/Signup';
import RoomForm from './components/RoomForm/RoomForm';
import Rooms from './pages/Rooms';
import Login from './components/auth/Login/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/explore' element={<SearchPage/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/roomForm' element={<RoomForm/>}/> */}
          <Route path='/rooms' element={<Rooms/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
