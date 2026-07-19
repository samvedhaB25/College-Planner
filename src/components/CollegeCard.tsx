export default function CollegeCard({ category, colleges }) {
    return (
        <div className="w-72 min-h-96 bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-center text-blue-700">
                {category}
            </h2>

            <div className="mt-6">
                {colleges.map((college) =>(
                    <p key={college.id}>
                        {college.name}
                    </p>
                ))}
            </div>

        </div>

    );
}