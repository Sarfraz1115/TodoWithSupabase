import { Calendar, Home, Settings, User, X, LogOut } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../utils/supabaseClient'
import { toast } from 'react-toastify'


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const Navigate = useNavigate()
  const handledashboard = () => {
    Navigate("/dashboard");
    setSidebarOpen(false);
  }

  const handleprofile = () => {
    Navigate("/profile");

  }
  const handlesetting = () => {
    Navigate("/settings")
  }
  const hanldelogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("error during logout", error.message);
      toast.error("succes");
    }
    else {
      toast.success("loged out succesfully")
      console.log('Logged out successfully!');
      Navigate('/login', { replace: true });
    }
  }
  return (
    <aside className={`border-r bg-white border-gray-200 w-[200px]  ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}  fixed top-0 left-0 h-full z-30 transition-transform duration-300 ease-in-out
      lg:static lg:translate-x-0 lg:h-auto `}>
      <button className='absolute top-4 right-4 text-black lg:hidden hover:cursor-pointer '
        onClick={() => setSidebarOpen(false)}>
        <X className='hover:text-blue-400' />
      </button>
      <div className='flex flex-col h-full p-4 gap-2'>
        <nav className='grid gap-1 px-3 py-8 '>
          <button onClick={handledashboard}
            className={`flex gap-2 items-center hover:bg-gray-200 rounded-md p-2.5 hover:cursor-pointer 
          ${location.pathname === '/dashboard' ? 'bg-blue-100 text-blue-500' : 'hover:bg-gray-200'}`}>
            <Home className={`w-[20px] h-[20px] 
              ${location.pathname === '/dashboard' ? 'text-blue-500' : 'text-blue-400'} `} />
            <span  >Dashboard</span>
          </button>
          {/* <button className='flex gap-2 items-center hover:bg-gray-200 rounded-md p-2.5 hover:cursor-pointer'>
            <Calendar className='w-[20px] h-[20px] text-blue-400' />
            <span onClick={handlecalender} className=''>Calendar</span>
          </button> */}
          <button onClick={handleprofile} className='flex gap-2 items-center hover:bg-gray-200 rounded-md p-2.5 hover:cursor-pointer'>
            <User className='w-[20px] h-[20px] text-blue-400' />
            <span className=''>Profile</span>
          </button>
          <button onClick={handlesetting} className='flex gap-2 items-center hover:bg-gray-200 rounded-md p-2.5 hover:cursor-pointer'>
            <Settings className='w-[20px] h-[20px] text-blue-400' />
            <span className=''>Settings</span>
          </button>


          <div className="hover:cursor-pointer pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
            <button onClick={hanldelogout} className=' flex gap-2 items-center hover:bg-gray-200 rounded-md p-2.5 hover:cursor-pointer'>
              <LogOut className='w-[30px] h-[20px] text-blue-400' />
              <span className='' >Log Out</span>
            </button>
          </div>
        </nav>

      </div>
    </aside>
  )
}

export default Sidebar