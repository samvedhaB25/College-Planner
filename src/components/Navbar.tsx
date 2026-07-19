import { Link } from "react-router-dom";

export default function Navbar() {
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
                <li className="hover:text-green-600">
                    <Link to="/features">Features</Link>
                </li>
                <li className="hover:text-green-600">
                    <Link to="/about">About</Link>
                </li>
                
            </ul>

            <button className="text-gray px-4 py-2 rounded-lg text-white hover:text-green-600"
                    style={{ fontFamily: "Poppins, sans-serif" }}>
                Login/Sign-up
            </button>

        </nav>
    );
}