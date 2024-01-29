import React, { useState }  from 'react';
import Navbar from '../components/Navbar/Navbar';
import RoomForm from '../components/RoomForm/RoomForm';
import RoomCard from '../components/RoomCard/RoomCard';
import { IoMdAddCircle } from "react-icons/io";

const Rooms = ({companyName,ask,percentage,startDate,endDate}) => {
     const [createForm,setCreateForm] = useState(false);

     const handleRoomForm = () => {
            setCreateForm(!createForm)
      } 
          
  return (
 <>
      <Navbar/>    
      {createForm ?  
          <RoomForm />
       :
       <>
          <RoomCard /> 
          <div className='absolute top-0 right-1 font-[Nunito,sans-serif] '>
                    <button className='flex items-center  mt-[100px] bg-[#000000] p-3 font-bold text-white rounded-md'
                    onClick={handleRoomForm}>
                              <IoMdAddCircle size={20} className='mr-2'/> Create Room Form
                    </button> 
          </div>
         
          </>
      } 

    </>
  )
}

export default Rooms
