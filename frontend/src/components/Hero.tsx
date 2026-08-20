import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUserProfile } from '../data/userData';

export default function Hero() {
    const navigate = useNavigate();
    const { user } = useAuth();

    function handleGetStarted() {
        if (!user) {
            navigate('/login');
        } else {
            const profile = getUserProfile();
            navigate(profile.onboardingComplete ? '/dashboard' : '/upload-transcript');
        }
    }

    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center">
            <div style={{ fontFamily: "Poppins, sans-serif" }}>
                <h2 className="text-6xl font-semibold">
                    Plan Your College Journey
                </h2>
                <p className="text-lg mt-6 text-gray-600">
                    Organize applications, essays, scholarships, and deadlines.
                </p>
            </div>

            <div className="mt-8 space-x-4">
                <button
                    onClick={handleGetStarted}
                    className="px-8 py-3 rounded-full bg-emerald-300"
                >
                    Get Started
                </button>
            </div>
        </section>
    );
}