import React from 'react'

const Analytics = () => {
  const metrics = [
    {
      title: "Total Sales",
      value: "$120,000",
      change: "+12%",
      isPositive: true,
    },
    { title: "Active Users", value: "1,200", change: "-8%", isPositive: false },
    {
      title: "Website Visits",
      value: "8,500",
      change: "+5%",
      isPositive: true,
    },
    { title: "New Sign-Ups", value: "350", change: "+18%", isPositive: true },
  ];


  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
      <div className='max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>
          Analytics Dashboard
        </h1>

        {/*Overview metrics and Section*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {
            metrics.map((metric, index) => (
              <div key={index} className={`flex justify-between items-center bg-white rounded-lg shadow-md p-6 border-l-4 ${metric.isPositive ? "border-green-500" : "border-red-500"}`}>
                <div>
                  <h3 className='text-xl font-semibold text-gray-700'>{metric?.title}</h3>
                  <p className='text-lg text-gray-600 mt-2'>{metric?.value}</p>
                </div>
                <div className='text-right'>
                  <p className={`text-sm mt-2 ${metric.isPositive ? "text-green-500" : "text-red-500"}`}>{metric?.change}</p>
                </div>
              </div>
            ))
          }
        </div>

        {/* Charts Section  ()Placeholder for graph*/}
        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>Website Traffic</h2>
          <div className="bg-gray-100 rounded-lg h-72 text-black">
            Charts Placeholder
          </div>
        </div>

        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>Website Traffic</h2>
          <div className="bg-gray-100 rounded-lg h-72 text-black">
            Charts Placeholder
          </div>
        </div>

        {/*Recent Activities Section*/}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-4">
            <li className="flex item-center justify-between bg-white rounded-lg shadow-md p-4">

              <div className=''>
                <h3 className="text-lg font-semibold text-gray-700">
                  User Registration
                </h3>
                <p className="text-sm text-gray-600">New user signed up on 2026-02-16</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'> +10 Users</p>
              </div>

              <div className=''>
                <h3 className="text-lg font-semibold text-gray-700">
                  Sales Increase
                </h3>
                <p className="text-sm text-gray-600">Sales grow by 12% on 2025-02-14</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'> +$15,000 Users</p>
              </div>
            </li>

            <li className="flex item-center justify-between bg-white rounded-lg shadow-md p-4">

              <div className=''>
                <h3 className="text-lg font-semibold text-gray-700">
                 Website Traffic Surge
                </h3>
                <p className="text-sm text-gray-600">Traffic increased by 8% on 2026-02-13</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'> +10 Users</p>
              </div>

              <div className=''>
                <h3 className="text-lg font-semibold text-gray-700">
                  Sales Increase
                </h3>
                <p className="text-sm text-gray-600">Sales grow by 12% on 2025-02-14</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'> +$200 Visits</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Analytics
