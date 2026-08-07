import CollegeEssayCard from "./CollegeEssayCard";
import type { College, Essay } from "../../data";

interface SupplementalCardProps {
    colleges: College[];
    essays: Essay[];
}

export default function SupplementalCard({
    colleges,
    essays,
}: SupplementalCardProps) {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">
                Supplemental Essays
            </h2>

            {
                colleges.map((college) => {
                    const collegeEssays = essays.filter(
                        essay => essay.collegeId === college.id
                    );

                    if (collegeEssays.length === 0) {
                        return null;
                    }

                    return (
                        <CollegeEssayCard
                            key={college.id}
                            college={college}
                            essays={collegeEssays}
                        />
                    );
                })
            }

        </div>

    );
}