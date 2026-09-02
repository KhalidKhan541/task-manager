export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">Stats</h2>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">Activity</h2>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">Settings</h2>
        </div>
      </div>
    </div>
  );
}
