import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LeadContext } from "../../context/LeadContext";

function Profile() {
  const { user } = useContext(AuthContext);
  const { leads } = useContext(LeadContext);

  const totalLeads = leads.length;

  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;

  const interestedLeads = leads.filter(
    (lead) => lead.status === "Interested"
  ).length;

  const convertedLeads = leads.filter(
    (lead) => lead.status === "Converted"
  ).length;

  const conversionRate =
    totalLeads === 0
      ? 0
      : ((convertedLeads / totalLeads) * 100).toFixed(1);

  return (
    <div className="max-w-5xl mx-auto">

      <div className="bg-white rounded-xl shadow-md p-8">

        {/* Header */}

        <div className="flex flex-col items-center">

          <img
            src={`https://ui-avatars.com/api/?name=${user?.name}&background=2563eb&color=fff&size=200`}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-5"
          />

          <h1 className="text-3xl font-bold">
            {user?.name}
          </h1>

          <p className="text-gray-500 mt-2">
            {user?.email}
          </p>

        </div>

        {/* Account */}

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-gray-50 rounded-lg p-5">

            <h3 className="font-semibold text-gray-700">
              Account Type
            </h3>

            <p className="text-blue-600 font-medium mt-2">
              CreatorFlow User
            </p>

          </div>

          <div className="bg-gray-50 rounded-lg p-5">

            <h3 className="font-semibold text-gray-700">
              Total Leads
            </h3>

            <p className="text-2xl font-bold text-blue-600 mt-2">
              {totalLeads}
            </p>

          </div>

        </div>

        {/* Statistics */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-6">
            Lead Statistics
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

            <div className="bg-blue-100 rounded-lg p-5 text-center">
              <h3 className="text-sm text-gray-600">
                New
              </h3>

              <p className="text-2xl font-bold">
                {newLeads}
              </p>
            </div>

            <div className="bg-yellow-100 rounded-lg p-5 text-center">
              <h3 className="text-sm text-gray-600">
                Contacted
              </h3>

              <p className="text-2xl font-bold">
                {contactedLeads}
              </p>
            </div>

            <div className="bg-purple-100 rounded-lg p-5 text-center">
              <h3 className="text-sm text-gray-600">
                Interested
              </h3>

              <p className="text-2xl font-bold">
                {interestedLeads}
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-5 text-center">
              <h3 className="text-sm text-gray-600">
                Converted
              </h3>

              <p className="text-2xl font-bold">
                {convertedLeads}
              </p>
            </div>

            <div className="bg-indigo-100 rounded-lg p-5 text-center">
              <h3 className="text-sm text-gray-600">
                Conversion
              </h3>

              <p className="text-2xl font-bold">
                {conversionRate}%
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;