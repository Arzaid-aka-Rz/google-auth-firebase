

export function Profile() {
  // Example static data
  const user = {
    name: "John Doe",
    username: "@johndoe",
    email: "john.doe@example.com",
    profilePicture: "https://i.pravatar.cc/300",
    bio: "Passionate developer | Open source enthusiast | Coffee lover",
    location: "San Francisco, CA",
    joinDate: "Joined September 2021",
    followers: 1234,
    following: 567
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full">
        <div className="relative p-6">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={user.profilePicture}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
            />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-lg text-gray-600">{user.username}</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700 mb-4">{user.bio}</p>
            <div className="flex justify-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l6 6-6 6M15 7l6 6-6 6"></path>
                </svg>
                <span className="text-sm text-gray-600">{user.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"></path>
                </svg>
                <span className="text-sm text-gray-600">{user.joinDate}</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mb-6">
              <div>
                <span className="font-semibold text-gray-900">{user.followers.toLocaleString()}</span>
                <span className="text-gray-600"> Followers</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">{user.following.toLocaleString()}</span>
                <span className="text-gray-600"> Following</span>
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold mr-2">React</span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold mr-2">TypeScript</span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">Node.js</span>
            </div>
          </div>
          <div className="flex justify-between mt-6 border-t border-gray-200 pt-4">
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg border border-gray-300">Message</button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg border border-blue-700 hover:bg-blue-700">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}
