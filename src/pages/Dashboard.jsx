import React from 'react'
import Sidebar from '../Components/dashboard/Sidebar'
import DashboardHeader from '../Components/dashboard/DashboardHeader'
import Main from '../Components/dashboard/Main'
import { useState } from 'react'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className='flex min-h-screen flex-col'>
      <DashboardHeader setSidebarOpen={setSidebarOpen}/>
      <div className='flex flex-1 '>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Main className="flex-1"/>
      </div>
    </div>
  )
}

export default Dashboard