function Navbar() {
  return (
    <header className="h-16 bg-white border-b shadow-sm flex items-center justify-between px-8">
      <div>
        <h1 className="text-2xl font-bold text-blue-600">
          CreatorFlow CRM
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">
          Welcome, Priyanshu 👋
        </span>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          P
        </div>
      </div>
    </header>
  );
}

export default Navbar;