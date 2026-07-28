import { useParams } from "react-router-dom";
import { safetyColleges, targetColleges, reachColleges } from "../data";

import Navbar from '../components/Navbar';

export default function CollegePage() {
    const { id } = useParams();

    const colleges = [
        ...safetyColleges,
        ...targetColleges,
        ...reachColleges
    ];

    const college = colleges.find(
        (college) => college.id === Number(id)
    );

    if (!college) {
        return <h1>College not found.</h1>;
    }

    return (
        <div>
            <Navbar />
            
            <h1 className="px-3 py-5 text-5xl font-semibold text-blue-950"> 
                {college.name} 
            </h1>

            <div className="px-3 flex items-center gap-3">

                <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                    college.progress === "complete"
                        ? "bg-green-100 text-green-700"
                        : college.progress === "in-progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                {college.progress === "in-progress"
                    ? "In Progress"
                    : college.progress === "not-started"
                    ? "Not Started"
                    : "Complete"}
                </span>
            </div>

        </div>

    );
}