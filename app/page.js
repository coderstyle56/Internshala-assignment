// "use client";

// import { useEffect, useState } from "react";
// import { fetchInternships } from "./utils/fetchInternships";

// import Navbar from "./components/Navbar";
// import PageHeader from "./components/PageHeader";
// import FilterSidebar from "./components/FilterSidebar";
// import InternshipList from "./components/InternshipList";
// import MobileFilterBar from "./components/MobileFilterBar";

// export default function Home() {
//   const [internships, setInternships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [profileFilter, setProfileFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");
//   const [durationFilter, setDurationFilter] = useState("");
//   const [stipendFilter, setStipendFilter] = useState(0);
//   const [showMobileFilters, setShowMobileFilters] = useState(false);
//   const [workFromHomeOnly, setWorkFromHomeOnly] = useState(false);

//   useEffect(() => {
//     async function loadData() {
//       try {
//         const data = await fetchInternships();
//         setInternships(data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-xl font-medium text-gray-600">
//         Loading internships...
//       </div>
//     );
//   }

//   const filteredInternships = internships.filter((internship) => {
//     const matchesProfile = internship.profile_name
//       .toLowerCase()
//       .includes(profileFilter.toLowerCase());

//     const matchesWFH = workFromHomeOnly ? internship.work_from_home : true;

//     const matchesLocation = internship.work_from_home
//       ? "work from home".includes(locationFilter.toLowerCase())
//       : internship.location_names?.some((location) =>
//           location.toLowerCase().includes(locationFilter.toLowerCase()),
//         );

//     const matchesDuration =
//       durationFilter === ""
//         ? true
//         : internship.duration.includes(durationFilter);

//     const matchesStipend =
//       (internship.stipend?.salaryValue1 || 0) >= stipendFilter;

//     return (
//       matchesProfile && matchesLocation && matchesDuration && matchesStipend
//     );
//   });

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />
//       <PageHeader count={filteredInternships.length} />
//       <MobileFilterBar
//         setShowMobileFilters={setShowMobileFilters}
//         workFromHomeOnly={workFromHomeOnly}
//         setWorkFromHomeOnly={setWorkFromHomeOnly}
//       />
//       <main className="max-w-6xl mx-auto px-4 pb-10">
//         <div className="flex flex-col lg:flex-row gap-6">
//           <div className="hidden lg:block w-70">
//             <FilterSidebar
//               profileFilter={profileFilter}
//               setProfileFilter={setProfileFilter}
//               locationFilter={locationFilter}
//               setLocationFilter={setLocationFilter}
//               durationFilter={durationFilter}
//               setDurationFilter={setDurationFilter}
//               stipendFilter={stipendFilter}
//               setStipendFilter={setStipendFilter}
//             />
//           </div>

//           <div className="flex-1">
//             <InternshipList internships={filteredInternships} />{" "}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { fetchInternships } from "./utils/fetchInternships";

import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";
import FilterSidebar from "./components/FilterSidebar";
import InternshipList from "./components/InternshipList";
import MobileFilterBar from "./components/MobileFilterBar";

export default function Home() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  // desktop + mobile filter states
  const [profileFilter, setProfileFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [stipendFilter, setStipendFilter] = useState(0);

  // mobile states
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [workFromHomeOnly, setWorkFromHomeOnly] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchInternships();
        setInternships(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-medium text-gray-600">
        Loading internships...
      </div>
    );
  }

  const filteredInternships = internships.filter((internship) => {
    const matchesProfile = internship.profile_name
      .toLowerCase()
      .includes(profileFilter.toLowerCase());

    const matchesWFH = workFromHomeOnly
      ? internship.work_from_home
      : true;

    const matchesLocation = internship.work_from_home
      ? "work from home".includes(locationFilter.toLowerCase())
      : internship.location_names?.some((location) =>
          location.toLowerCase().includes(locationFilter.toLowerCase())
        );

    const matchesDuration =
      durationFilter === ""
        ? true
        : internship.duration.includes(durationFilter);

    const matchesStipend =
      (internship.stipend?.salaryValue1 || 0) >= stipendFilter;

    return (
      matchesProfile &&
      matchesWFH &&
      matchesLocation &&
      matchesDuration &&
      matchesStipend
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <PageHeader count={filteredInternships.length} />

      <MobileFilterBar
        setShowMobileFilters={setShowMobileFilters}
        workFromHomeOnly={workFromHomeOnly}
        setWorkFromHomeOnly={setWorkFromHomeOnly}
      />

      {/* mobile popup filters */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center lg:hidden">
          <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowMobileFilters(false)}
              className="absolute top-4 right-4 text-2xl text-gray-700"
            >
              ×
            </button>

            <FilterSidebar
              profileFilter={profileFilter}
              setProfileFilter={setProfileFilter}
              locationFilter={locationFilter}
              setLocationFilter={setLocationFilter}
              durationFilter={durationFilter}
              setDurationFilter={setDurationFilter}
              stipendFilter={stipendFilter}
              setStipendFilter={setStipendFilter}
            />
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 pb-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* desktop filters */}
          <div className="hidden lg:block w-70">
            <FilterSidebar
              profileFilter={profileFilter}
              setProfileFilter={setProfileFilter}
              locationFilter={locationFilter}
              setLocationFilter={setLocationFilter}
              durationFilter={durationFilter}
              setDurationFilter={setDurationFilter}
              stipendFilter={stipendFilter}
              setStipendFilter={setStipendFilter}
            />
          </div>

          {/* internship cards */}
          <div className="flex-1">
            <InternshipList internships={filteredInternships} />
          </div>
        </div>
      </main>
    </div>
  );
}
