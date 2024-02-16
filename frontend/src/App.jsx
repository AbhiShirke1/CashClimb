import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/auth/Signup/Signup'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import Login from './components/auth/Login/Login'
import Protected from './components/auth/Protected'
// import ProfilePage from './pages/ProfilePage/ProfilePage'
import OverviewPage from './pages/ProfilePage/OverviewPage'
import StepOnePage from './components/auth/Signup/Steps/StepOnePage'
import InvestorInfo from './components/auth/Signup/InvestorSignup/InvestorInfo'
import InvestorIncome from './components/auth/Signup/InvestorSignup/InvestorIncome'
import InvestorPreferences from './components/auth/Signup/InvestorSignup/InvestorPreferences'
import PublicProfile from './components/auth/Signup/InvestorSignup/PublicProfile'
import ReasonsToInvest from './components/auth/Signup/FounderSignup/ReasonsToInvest'
import CompanyInfo from './components/auth/Signup/FounderSignup/CompanyInfo'
import PastFunding from './components/auth/Signup/FounderSignup/PastFunding'
import Profile from './pages/ProfilePage/Profile'
import UpdatePage from './components/auth/Signup/Steps/UpdatePage'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/welcome/identity' element={<InvestorInfo/>}/>
            <Route path='/explore' element={<SearchPage/>}/>

            <Route path='/welcome/income' element={<InvestorIncome/>}/>
            <Route path='/welcome/choices' element={<InvestorPreferences/>}/>
            <Route path='/welcome/createprofile' element={<PublicProfile/>}/>
            
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Protected><Home/></Protected>}/>
            <Route path='/home' element={<HomePage/>}/>
            {/* <Route path='/investor/profile' element={<ProfilePage/>}/> */}
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/profile/update' element={<UpdatePage/>}/>
            {/* <Route path='/investor' element={<OverviewPage/>}/> */}
            <Route path='/step1' element={<StepOnePage/>}/>
            <Route path='/welcome/reasons' element={<ReasonsToInvest/>}/>
            <Route path='/welcome/info' element={<CompanyInfo/>}/>
            <Route path='/welcome/pastfunding' element={<PastFunding/>}/>
            {/* <Route path='/step3' element={<MainForm/>}/> */}
            {/* <Route path='/step1' element={<StepOnePage/>}/> */}
            {/* <Route path='/investor/updates' element={<UpdatePage/>}/> */}
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App