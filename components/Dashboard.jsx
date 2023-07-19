import React from 'react'
import Profile from './Profile'
import Tasktable from './Tasktable'

const Dashboard = () => {
  return (
    <div className=' flex lg:flex-row flex-col justify-center md:justify-between items-start'>
        <Profile />
        {/* </div> */}
        <div className='bg-[#F7F8FA] w-full md:pt-8 pt-12'>
        <Tasktable />
        </div>
    </div>
  )
}

export default Dashboard