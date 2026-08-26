import Navbar from '../components/Navbar';
import CollegeCard from '../components/CollegeCard';
import { getCollegesByCategory } from '../data/collegeStore';

export default function Colleges() {
    const { safetyColleges, targetColleges, reachColleges } = getCollegesByCategory();

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