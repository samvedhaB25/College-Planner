import { useParams } from "react-router-dom";
import { getAllColleges } from "../data/collegeStore";

import Navbar from '../components/Navbar';
import SupplementalEssaysCard from '../components/SupplementalEssaysCard';
import NotesCard from '../components/NotesCard';
import OtherInfoCard from '../components/OtherInfoCard'

export default function CollegePage() {
    const { id } = useParams();

    const colleges = getAllColleges();

    const college = colleges.find(
        (college) => college.id === Number(id)
    );

    if (!college) {
        return <h1>College not found.</h1>;
    }

    return (
        <div>
            <Navbar />
            
            <h1 className="px-3 py-5 text-5xl font-semibold text-blue-950 italic"
                style={{ fontFamily: "Crimson Text, sans-serif" }}> 
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


                <span className="inline-block w-fit px-4 py-1 rounded-full text-sm font-medium border bg-gray-100 text-gray-700 border-gray-200">
                    Deadline: {college.deadline}
                </span>


            </div>


            <div className="mt-8 px-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column */}
                <div className="space-y-6">

                    {/* Acceptance Rate */}
                    <div className="flex flex-col items-start">

                        <div className="w-36 h-36 rounded-full bg-blue-100 border-4 border-blue-200 flex flex-col items-center justify-center">
                            <p className="text-4xl font-bold text-blue-700">
                                {college.acceptRate}
                            </p>
                        </div>

                        <div className="mt-4 space-y-1">

                            <p className="text-gray-700">
                                In-State:{" "}
                                <span className="font-semibold">
                                    {college.iSAcceptRate}
                                </span>
                            </p>

                            <p className="text-gray-700">
                                Out-of-State:{" "}
                                <span className="font-semibold">
                                    {college.oSAcceptRate}
                                </span>
                            </p>
                        </div>

                    </div>


                    {/* Other Information */}
                    <OtherInfoCard />

                </div>


                {/* Right Column */}
                <div className="lg:col-span-2 grid grid-cols-1 gap-6">

                    <SupplementalEssaysCard />

                    <NotesCard />

                </div>

            </div>

        </div>

    );
}