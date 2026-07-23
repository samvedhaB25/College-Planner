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

            <h1> {college.name} </h1>

            <p>Progress: {college.progress}</p>

        </div>

    );
}