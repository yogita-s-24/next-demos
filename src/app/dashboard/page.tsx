import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8'>
      <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8'>
        <div className='flex flex-col'>
          <h1 className='text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0'>Dashboard</h1>
          <p className="text-lg text-gray-600 mt-3">
            Welcome back! Here you can manage your tasks, view analytics, and make adjustments.
          </p>
        </div>

        {/*Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Task Card */}
          <Link href="/dashboard/tasks" className="bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-105">
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-semibold text-blue-800'>
                Tasks
              </h2>
              <span className='text-blue-500 text-2xl'>🗒️</span>
            </div>
            <p className='text-gray-700 mt-2'>View, organize, and manage your daily tasks.</p>
          </Link>

          {/* Analytics Card */}
          <Link href="/dashboard/analytics" className="bg-green-100 hover:bg-green-200 p-6 rounded-xl shadow-sm hover:shadow- transition-all duration-200 ease-in-out transform hover:scale-105">
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-semibold text-green-600'>
                Analytics
              </h2>
              <span className='text-blue-500 text-2xl'>📊</span>
            </div>
            <p className='text-gray-700 mt-2'>Gain insights into your performance and trends.</p>
          </Link>

          {/* Settings Card */}
          <Link href="/dashboard/settings" className="bg-purple-100 hover:bg-purple-200 p-6 rounded-xl shadow-sm hover:shadow- transition-all duration-200 ease-in-out transform hover:scale-105">
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-semibold text-purple-600'>
                Settings
              </h2>
              <span className='text-blue-500 text-2xl'>⚙️</span>
            </div>
            <p className='text-gray-700 mt-2'>Customize and tweak your dashboard settings.</p>
          </Link>

          {/* Users Card */}
          <Link href="/dashboard/users" className="bg-yellow-100 hover:bg-yellow-200 p-6 rounded-xl shadow-sm hover:shadow- transition-all duration-200 ease-in-out transform hover:scale-105">
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-semibold text-yellow-600'>
                Users
              </h2>
              <span className='text-blue-500 text-2xl'> 👥</span>
            </div>
            <p className='text-gray-700 mt-2'>
              View and manage your user base.
            </p>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
