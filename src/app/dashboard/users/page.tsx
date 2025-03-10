import Link from 'next/link'
import React from 'react'

const Users = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>Users</h1>
        <p className='text-lg text-gray-600 mb-8'>
          Manage your user here. You can view detailed information or browse a list of users.
        </p>

        {/* User related section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>

          {/* Users details cards */}

          <Link href="/dashboard/users/user-details" className='bg-teal-50 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4'>
            <h2 className="text-xl font-semibold text-teal-800 mb-2">User Details</h2>
            <p className="text-gray-600"> View detailed information about each user in your system.</p>
          </Link>

          {/* Users list cards */}
          <Link href="/dashboard/users/user-list" className='bg-orange-50 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4'>
            <h2 className="text-xl font-semibold text-orange-800 mb-2">User Lists</h2>
            <p className="text-gray-600"> View detailed information about each user in your system.</p>
          </Link>
        </div>


      </div>
    </div>
  )
}

export default Users
