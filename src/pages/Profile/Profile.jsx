function Profile() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-8">

        <div className="flex flex-col items-center">

          <img
            src="https://ui-avatars.com/api/?name=Priyanshu+Panwar&background=2563eb&color=fff&size=200"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-6"
          />

          <h1 className="text-3xl font-bold">
            Priyanshu Panwar
          </h1>

          <p className="text-gray-500 mt-2">
            Full Stack Developer
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div>
            <h3 className="font-semibold text-gray-700">
              Email
            </h3>

            <p className="text-gray-500">
              priyanshupanwar@example.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">
              Location
            </h3>

            <p className="text-gray-500">
              India
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">
              Role
            </h3>

            <p className="text-gray-500">
              MERN Stack Developer
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">
              Experience
            </h3>

            <p className="text-gray-500">
              Student Developer
            </p>
          </div>

        </div>

        <div className="mt-10">

          <h3 className="font-semibold mb-4">
            Skills
          </h3>

          <div className="flex flex-wrap gap-3">

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              React
            </span>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              Express
            </span>

            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
              MongoDB
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              JavaScript
            </span>

            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full">
              Tailwind CSS
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;