// import InternshipCard from "./InternshipCard";

// export default function InternshipList({ internships }) {
//   return (
//     <div className="space-y-5 text-gray-700">
//       {internships.map((internship) => {
//         <div key={internship.id} className="bg-white border rounded-xl p-6">
//           {internship.profile_name}
//         </div>;
//       })}
//     </div>
//   );
// }
// import InternshipCard from "./InternshipCard";

// export default function InternshipList({ internships }) {
//   console.log("LIST DATA:", internships);

//   return (
//     <div className="space-y-5">
//       {internships?.map((internship) => (
//         <InternshipCard
//           key={internship.id}
//           internship={internship}
//         />
//       ))}
//     </div>
//   );
// }
import InternshipCard from "./InternshipCard";
export default function InternshipList({ internships }) {
  if (internships.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">
          No internships found
        </h2>

        <p className="text-gray-500 mt-3">
          Try changing your filters
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {internships.map((internship) => (
        <InternshipCard
          key={internship.id}
          internship={internship}
        />
      ))}
    </div>
  );
}
