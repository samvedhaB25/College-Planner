import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUserProfile } from '../data/userData';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ReturningUserHome from '../components/ReturningUserHome';

export default function Home() {
    const { user, loading } = useAuth();

    if (loading) return null;

    if (!user) {
        return (
            <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen">
                <Navbar />
                <Hero />
            </div>
        );
    }

    const profile = getUserProfile();
    if (!profile.onboardingComplete) {
        return <Navigate to="/upload-transcript" replace />;
    }

    return (
        <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen">
            <Navbar />
            <ReturningUserHome username={user.username} />
        </div>
    );
}