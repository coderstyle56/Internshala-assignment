export default function PageHeader({count}) {
    return (
        <div className="text-center py-6">
            <h2 className="text-3xl font-bold text-gray-800">
                {count} Total Internships

            </h2>

            <p className="text-gray-500 mt-2">
                Latest Internships in India

            </p>

        </div>
    );
}