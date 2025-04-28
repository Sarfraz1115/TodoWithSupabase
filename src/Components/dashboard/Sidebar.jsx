import { Calendar, Home, Settings, User, X } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Main from './Main'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const Navigate = useNavigate()
  const handledashboard = () => {
    console.log("Dashboard Clicked")
  }
  const handlecalender = () => {
    console.log("Calender Clicked")
  }
  const handleprofile = () => {
    // console.log("Profile Clicked")
    Navigate("/profile");

  }
  const handlesetting = () => {
    console.log("Settings Clicked")
  }
  return (
    <aside className={`border-r bg-white border-gray-200 w-[200px]  ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}  fixed top-0 left-0 h-full z-30 transition-transform duration-300 ease-in-out
      lg:static lg:translate-x-0 lg:h-auto `}>
      <button className='absolute top-4 right-4 text-black lg:hidden hover:cursor-pointer ' onClick={() => setSidebarOpen(false)}>
        <X className='hover:text-blue-400'/>
      </button>
      <div className='flex flex-col h-full p-4 gap-2'>
        <nav className='grid gap-1 px-3 py-8 '>
          <button className='flex gap-2 items-center hover:bg-gray-200 rounded-md p-2.5 hover:cursor-pointer'>
            <Home className='w-[20px] h-[20px] text-blue-400' />
            <span onClick={handledashboard} className='text-[14px]'>Dashboard</span>
          </button>
          <button className='flex gap-2 items-center hover:bg-gray-200 rounded-md p-2.5 hover:cursor-pointer'>
            <Calendar className='w-[20px] h-[20px] text-blue-400' />
            <span onClick={handlecalender} className=''>Calendar</span>
          </button>
          <button className='flex gap-2 items-center hover:bg-gray-200 rounded-md p-2.5 hover:cursor-pointer'>
            <User className='w-[20px] h-[20px] text-blue-400' />
            <span onClick={handleprofile} className=''>Profile</span>
          </button>
          <button className='flex gap-2 items-center hover:bg-gray-200 rounded-md p-2.5 hover:cursor-pointer'>
            <Settings className='w-[20px] h-[20px] text-blue-400' />
            <span onClick={handlesetting} className=''>Settings</span>
          </button>
        </nav>

      </div>
    </aside>
  )
}

export default Sidebar