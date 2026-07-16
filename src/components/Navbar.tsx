export default function Navbar() {
    return (
        <nav className="flex justify-between bg-indigo-50 items-center px-8 py-4">
            <h2 className="py-4 px-2 text-4xl font-sans text-sky-600"
                style={{ fontFamily: "Merriweather, sans-serif" }}>
                College Planner
            </h2>

            <ul className="flex space-x-6"
                style={{ fontFamily: "Poppins, sans-serif" }}>
                <li>Features</li>
                <li>About</li>
                <li>Create Account</li>
                
            </ul>

            <button className="text-gray px-4 py-2 rounded-lg hover:text-green-600"
                    style={{ fontFamily: "Poppins, sans-serif" }}>
                Login/Sign-up
            </button>

        </nav>
    );
}