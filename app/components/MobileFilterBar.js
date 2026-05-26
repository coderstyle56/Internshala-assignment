"use client";

export default function MobileFilterBar({
  setShowMobileFilters,
  workFromHomeOnly,
  setWorkFromHomeOnly,
}) {
  return (
    <div className="lg:hidden flex gap-3 px-4 py-3 overflow-x-auto">
      <button
        onClick={() => setShowMobileFilters(true)}
        className="border rounded-full px-4 py-2 text-sm bg-white text-gray-700 whitespace-nowrap"
      >
        Filters
      </button>

      <button
        onClick={() => setWorkFromHomeOnly(!workFromHomeOnly)}
        className={`border rounded-full px-4 py-2 text-sm whitespace-nowrap ${
          workFromHomeOnly
            ? "bg-blue-100 text-blue-700 border-blue-300"
            : "bg-white text-gray-700"
        }`}
      >
        Work from home
      </button>

      <button
        onClick={() => setShowMobileFilters(true)}
        className="border rounded-full px-4 py-2 text-sm bg-white text-gray-700 whitespace-nowrap"
      >
        All Filters
      </button>
    </div>
  );
}