// components/ReturningUserHome.tsx
import { useNavigate } from 'react-router-dom';
import {
    safetyColleges,
    targetColleges,
    reachColleges,
    essays,
} from '../data/data';

function daysUntil(dateStr: string): number {
    const deadline = new Date(dateStr);
    const now = new Date();
    const diff = deadline.getTime() - now.setHours(0, 0, 0, 0);
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function ReturningUserHome({ username }: { username: string }) {
    const navigate = useNavigate();
    const allColleges = [...safetyColleges, ...targetColleges, ...reachColleges];
    const essaysComplete = essays.filter((e) => e.status === 'complete').length;

    const upcoming = allColleges
        .map((c) => ({ name: c.name, days: daysUntil(c.deadline) }))
        .filter((c) => c.days >= 0)
        .sort((a, b) => a.days - b.days)
        .slice(0, 3);

    return (
        <section className="px-6 py-10 md:px-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h1 className="text-4xl font-semibold text-gray-900">Welcome back, {username}</h1>
            <p className="mt-2 text-gray-600">Here's where your applications stand.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white/80 backdrop-blur p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Schools tracked</p>
                    <p className="text-3xl font-semibold text-gray-900 mt-1">{allColleges.length}</p>
                </div>
                <div className="rounded-2xl bg-white/80 backdrop-blur p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Essays complete</p>
                    <p className="text-3xl font-semibold text-gray-900 mt-1">
                        {essaysComplete}/{essays.length}
                    </p>
                </div>
                <div className="rounded-2xl bg-white/80 backdrop-blur p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Next deadline</p>
                    <p className="text-lg font-semibold text-gray-900 mt-1">
                        {upcoming[0] ? `${upcoming[0].name} · ${upcoming[0].days}d` : 'None upcoming'}
                    </p>
                </div>
            </div>

            {upcoming.length > 0 && (
                <div className="mt-10">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg font-semibold text-gray-900">Coming up</h2>
                        <button
                            onClick={() => navigate('/calendar')}
                            className="text-sm text-emerald-600 hover:underline"
                        >
                            View calendar →
                        </button>
                    </div>
                    <div className="space-y-2">
                        {upcoming.map((c) => (
                            <div
                                key={c.name}
                                className="flex items-center justify-between rounded-xl bg-white/80 backdrop-blur border border-gray-100 px-4 py-3"
                            >
                                <span className="text-gray-800">{c.name}</span>
                                <span className={`text-sm ${c.days <= 14 ? 'text-rose-600 font-medium' : 'text-gray-400'}`}>
                                    {c.days}d left
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                    onClick={() => navigate('/colleges')}
                    className="rounded-2xl bg-emerald-300 p-5 text-left hover:bg-emerald-400 transition-colors"
                >
                    <p className="font-semibold text-gray-900">Manage colleges</p>
                    <p className="text-sm text-gray-700 mt-1">View, add, or edit your list</p>
                </button>
                <button
                    onClick={() => navigate('/essays')}
                    className="rounded-2xl bg-white/80 backdrop-blur border border-gray-100 p-5 text-left hover:border-gray-300 transition-colors"
                >
                    <p className="font-semibold text-gray-900">Work on essays</p>
                    <p className="text-sm text-gray-500 mt-1">
                        {essays.length - essaysComplete} left to finish
                    </p>
                </button>
                <button
                    onClick={() => navigate('/calendar')}
                    className="rounded-2xl bg-white/80 backdrop-blur border border-gray-100 p-5 text-left hover:border-gray-300 transition-colors"
                >
                    <p className="font-semibold text-gray-900">Full calendar</p>
                    <p className="text-sm text-gray-500 mt-1">All deadlines in one view</p>
                </button>
            </div>
        </section>
    );
}