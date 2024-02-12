import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SearchPage from './pages/SearchPage';
import MainForm from './components/auth/MultiPageSignup/MainForm'
import RoomForm from './components/RoomForm/RoomForm';
import Rooms from './pages/Rooms';
import Login from './components/auth/Login/Login';
import InvestorProfilePage from './pages/InvestorProfilePage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/explore' element={<SearchPage/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/investorprofile' element={<InvestorProfilePage/>} />
          <Route path='/signup' element={<MainForm/>}/>
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/roomForm' element={<RoomForm/>}/> */}
          <Route path='/rooms' element={<Rooms/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
