import Image from "next/image";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Profile Settings
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Picture
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-300">
              <Image
                width={100}
                height={100}
                src="https://avatars.githubusercontent.com/u/124052924?v=4"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div>
            <button className="px-6 mt-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Change Picture
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="text-gray-700 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg
                 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                defaultValue="john_doe"
                className="text-gray-700 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg
                 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="text-gray-700 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg
                 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200
           transition-colors"
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700
           transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
