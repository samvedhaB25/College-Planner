import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { user, loading } = useAuth();

    return (
        <nav className="flex justify-between w-full items-center px-8 py-3 bg-cyan-700">
            <Link to="/">
                <h2 className="py-4 px-2 text-4xl font-sans text-sky-50"
                    style={{ fontFamily: "Merriweather, sans-serif" }}>
                    College Planner
                </h2>
            </Link>

            <ul className="flex space-x-6 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}>
                {user && (
                    <>
                        <li className="hover:text-green-600">
                            <Link to="/colleges">Colleges</Link>
                        </li>
                        <li className="hover:text-green-600">
                            <Link to="/essays">Essays</Link>
                        </li>
                        <li className="hover:text-green-600">
                            <Link to="/calendar">Calendar</Link>
                        </li>
                    </>
                )}
                <li className="hover:text-green-600">
                    <Link to="/features">Features</Link>
                </li>
                <li className="hover:text-green-600">
                    <Link to="/about">About</Link>
                </li>
            </ul>

            {loading ? (
                <div className="w-24" />
            ) : user ? (
                <span
                    className="text-white px-4 py-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                >
                    {user.username}
                </span>
            ) : (
                <button
                    className="text-gray px-4 py-2 rounded-lg text-white hover:text-green-600"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    onClick={() => window.location.href = "http://localhost:8080/oauth2/authorization/cognito"}
                >
                    Login/Sign-up
                </button>
            )}
        </nav>
    );
}