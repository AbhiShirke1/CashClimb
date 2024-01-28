import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SearchPage from './pages/SearchPage';
import Signup from './components/auth/Sigup/Signup';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/explore' element={<SearchPage/>} />
          <Route path='/profile' element={<Profile/>} />
            {/* <Route index element={<Home />}/> */}
          <Route path='/signup' element={<Signup/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
