"use client";

export default function FiltersSidebar({
  profileFilter,
  setProfileFilter,
  locationFilter,
  setLocationFilter,
  durationFilter,
  setDurationFilter,
  stipendFilter,
  setStipendFilter,
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-5 sticky top-24">
      <h2 className="text-2xl font-semibold text-gray-900">Filters</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Profile
        </label>
        <input
          type="text"
          value={profileFilter}
          onChange={(e) => setProfileFilter(e.target.value)}
          placeholder="e.g. Marketing"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <input
          type="text"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          placeholder="e.g. Delhi"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Duration
        </label>
        <select
          value={durationFilter}
          onChange={(e) => setDurationFilter(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-500"
        >
          <option value="">Any duration</option>
          <option value="1 Month">1 Month</option>
          <option value="2 Months">2 Months</option>
          <option value="3 Months">3 Months</option>
          <option value="6 Months">6 Months</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Desired minimum monthly stipend (₹)
        </label>

        <input
          type="range"
          min="0"
          max="50000"
          step="5000"
          value={stipendFilter}
          onChange={(e) => setStipendFilter(Number(e.target.value))}
          className="w-full accent-blue-500"
        />

        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>0</span>
          <span>10K</span>
          <span>20K</span>
          <span>30K</span>
          <span>50K</span>
        </div>
      </div>
    </div>
  );
}
