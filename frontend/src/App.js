import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListOfStartup from './components/ListOfStartup/ListOfStartup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/explore' element={<ListOfStartup/>} />
            {/* <Route index element={<Home />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
