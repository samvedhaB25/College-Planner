import type { College, Essay } from "../../data/data";

interface CollegeEssayCardProps {
    college: College;
    essays: Essay[];
}

export default function CollegeEssayCard({
    college,
    essays,
}: CollegeEssayCardProps) {

    return (
        <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-xl font-semibold mb-6">
                {college.name}
            </h3>

            {
                essays.map((essay) => (
                    <div key={essay.id} className="mb-6">

                        <p className="text-sm text-gray-500 mb-2">
                            {essay.title}
                        </p>

                        <div className="bg-gray-50 border rounded-lg p-3">
                            <p className="text-gray-700 text-sm leading-6">
                                {essay.preview}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-y-4 mt-4">
                            <p className="text-gray-500">
                                Word Count
                            </p>

                            <p className="font-medium">
                                {essay.wordCount} / {essay.wordLimit}
                            </p>
                        </div>

                    </div>
                ))
            }

        </div>
    );
}