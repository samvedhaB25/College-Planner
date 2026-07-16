export default function Hero() {
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
                <button className="px-8 py-3 rounded-full bg-emerald-300">
                    Get Started
                </button>
            </div>
        </section>
    );
}