import { Link } from "react-router-dom";
import type { College } from "../data";

type CollegeCardProps = {
    category: string;
    colleges: College[];
};

export default function CollegeCard({ category, colleges }: CollegeCardProps) {
    return (
        <div className="w-72 min-h-80 bg-indigo-100 rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-center text-blue-700">
                {category}
            </h2>

            <div className="mt-6 h-50 overflow-y-auto border border-indigo-100 rounded-lg p-2 space-y-2">
                {colleges.map((college) => (
                    <Link
                        key={college.id}
                        to={`/colleges/${college.id}`}
                        className="flex items-center justify-between p-2 rounded-md hover:bg-indigo-50"
                    >
                        <p>
                            {college.name}
                        </p>

                        <div
                            className={`w-3 h-3 rounded-full ${
                                college.progress === "complete"
                                    ? "bg-green-500"
                                    : college.progress === "in-progress"
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                            }`}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}