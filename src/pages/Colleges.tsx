import Navbar from '../components/Navbar';
import CollegeCard from '../components/CollegeCard';

export default function Colleges() {
    const safetyColleges = [
        { id: 1, name: "University of Oregon" },
        { id: 2, name: "University of Arizona" }
    ];

    const targetColleges = [
        { id: 3, name:"University of Washington Seattle"},
        { id: 4, name:"Purdue University"}
    ];

    const reachColleges = [
        { id: 5, name: "Stanford University"},
        { id: 6, name: "University of Virginia"}
    ]

    return(
        <div>
            <Navbar />

            <div className="flex justify-center gap-8">
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