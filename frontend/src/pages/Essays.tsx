import Navbar from '../components/Navbar';
import PersonalStatementCard from '../components/Essays/PersonalStatementCard';
import SupplementalCard from '../components/Essays/SupplementalCard';

import { allColleges, essays } from '../data/data';

export default function Essays() {
    return (
        <div>
            <Navbar />

            <main className="max-w-7xl mx-auto px-2 py-8 text-emerald-800">
                <h1 className="text-4xl font-bold mb-8">
                    Essays
                </h1>
            </main>

            <div className="grid grid-cols-3 gap-8">

                <div className="bg-white rounded-xl shadow p-6">
                        <PersonalStatementCard />
                </div>

                <div className="col-span-2 bg-white rounded-xl shadow p-6">
                    <SupplementalCard
                        colleges={allColleges}
                        essays={essays}
                    />
                </div>

            </div>

        </div>

    );
}