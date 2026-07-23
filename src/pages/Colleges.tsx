import Navbar from '../components/Navbar';
import CollegeCard from '../components/CollegeCard';

export default function Colleges() {
    const safetyColleges = [
        { id: 1, name: "University of Oregon", progress: "complete" },
        { id: 2, name: "University of Arizona", progress: "in-progress" }
    ];

    const targetColleges = [
        { id: 3, name:"University of Washington Seattle", progress: "not started"},
        { id: 4, name:"Purdue University", progress: "in-progress"}
    ];

    const reachColleges = [
        { id: 5, name: "Stanford University", progress: "complete"},
        { id: 6, name: "University of Virginia", progress: "not started"}
    ]

    return(
        <div>
            <Navbar />

            <div className="flex justify-center gap-8 py-18">
                <CollegeCard
                    category="Safety"
                    colleges={safetyColleges}
                />

                <CollegeCard
                    category="Target"
                    colleges={targetColleges}
                />

                <CollegeCard
                    category="Reach"
                    colleges={reachColleges}
                />

            </div>

        </div>


    );

}