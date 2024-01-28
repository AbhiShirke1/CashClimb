import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeadingSection from '../components/ListOfStartup/HeadingSection';
import FilterStartup from '../components/ListOfStartup/FilterStartup';
import StartupList from '../components/ListOfStartup/StartupList';

const SearchPage = () => {
  return (
    <>
      <Navbar/>
      <HeadingSection/>
      <div className='flex justify-center '>
          <FilterStartup/>
          <StartupList/>
      </div>
    </>
  )
}

export default SearchPage
