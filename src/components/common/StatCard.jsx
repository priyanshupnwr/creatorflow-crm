function StatCard({ title, value, color }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition">
      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className={`text-4xl font-bold mt-2 ${color}`}>
        {value}
      </h2>
    </div>
  );
}

export default StatCard;