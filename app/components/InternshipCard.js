// export default function InternshipCard({ internship }) {
//   return (
//     <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

//       {/* Title */}
//       <h2 className="text-2xl font-semibold text-gray-900">
//         {internship.profile_name}
//       </h2>

//       {/* Company */}
//       <p className="text-gray-600 mt-1 text-lg">
//         {internship.company_name}
//       </p>

//       {/* Meta info */}
//       <div className="flex flex-wrap gap-6 mt-5 text-sm text-gray-700">
//         <span>
//           📍{" "}
//           {internship.work_from_home
//             ? "Work From Home"
//             : internship.location_names?.join(", ")}
//         </span>

//         <span>
//           💰 ₹{internship.stipend?.salaryValue1 || "Not disclosed"}/month
//         </span>

//         <span>
//           📅 {internship.duration}
//         </span>
//       </div>

//       {/* Start date */}
//       <div className="mt-4 text-sm text-gray-600">
//         Starts: {internship.start_date}
//       </div>

//       {/* Posted */}
//       <div className="mt-4 inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
//         {internship.posted_by_label}
//       </div>
//     </div>
//   );
// }

export default function InternshipCard({ internship }) {
    console.log(internship.labels);


  const logoUrl = internship.company_logo
    ? `https://internshala-uploads.internshala.com/logo/${internship.company_logo}`
    : null;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      {/* top section */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {internship.profile_name}
          </h2>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <p className="text-gray-600">{internship.company_name}</p>

            <span className="text-xs border border-blue-400 text-blue-500 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
              {" "}
              Actively hiring
            </span>
          </div>
        </div>

        {/* <div className="w-14 h-14 rounded-md border bg-gray-50 flex items-center justify-center overflow-hidden">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={internship.company_name}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <div className="w-14 h-14 rounded-md border bg-gray-100 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-600">
                {internship.company_name?.charAt(0)}
              </span>
            </div>
          )}
        </div> */}
      </div>
      {internship.labels_app_in_card?.length > 0 && (
        <p className="mt-4 text-gray-500 text-sm">
          {internship.labels_app_in_card.join(" • ")}
        </p>
      )}

      {/* metadata */}
      <div className="flex flex-wrap gap-6 mt-5 text-sm text-gray-700">
        <span>
          📍{" "}
          {internship.work_from_home
            ? "Work From Home"
            : internship.location_names?.join(", ")}
        </span>

        <span>💰 {internship.stipend?.salary || "Not disclosed"}</span>

        <span>📅 {internship.duration}</span>
      </div>

      {/* summary */}
      <div className="mt-4 text-gray-600 text-sm">
        Start date: {internship.start_date}
      </div>

      {/* bottom badges */}
      <div className="flex flex-wrap gap-3 mt-5">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
          {internship.posted_by_label}
        </span>

        {internship.part_time && (
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
            Part-time
          </span>
        )}

        {internship.is_ppo && (
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
            Job offer
          </span>
        )}
      </div>
    </div>
  );
}
