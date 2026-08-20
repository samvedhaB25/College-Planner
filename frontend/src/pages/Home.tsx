import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ReturningUserHome from '../components/ReturningUserHome';

export default function Home() {
    const { user, loading } = useAuth();

    return (
        <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen">
            <Navbar />
            {loading ? null : user ? (
                <ReturningUserHome username={user.username} />
            ) : (
                <Hero />
            )}
        </div>
    );
}