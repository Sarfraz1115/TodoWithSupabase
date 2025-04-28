import React from 'react'
import { CheckCircle2, Moon, Menu } from 'lucide-react'
import { Avatar } from '@mui/material'

const DashboardHeader = ({setSidebarOpen}) => {
 
  return (
    <div>
      {/* Header */}
      <header className='sticky flex justify-between h-12 items-center gap-4 bg-background border-b px-4 top-0 z-10 md:px-6'>
        <div className='flex items-center gap-2 font-semibold'>
          <CheckCircle2 className='text-blue-600 hidden lg:inline' />
          <span className='hidden lg:inline'>TaskMaster</span>
          <button className="lg:hidden hover:cursor-pointer" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <div className='flex items-center gap-4 '>
          <button className='rounded-full w-[30px] h-[30px] flex items-center justify-center border-[1px] hover:cursor-pointer hover:bg-green-200 '>
            <Moon className='w-[20px] h-[20px]' />
            <span className='sr-only'>Notifications</span>
          </button>
          <button className='rounded-full w-[40px] h-[40px] flex items-center justify-center hover:cursor-pointer'>
            <Avatar sx={{ width: 30, height: 30 }} className='' />
          </button>
        </div>
      </header>
    </div>
  )
}

export default DashboardHeader