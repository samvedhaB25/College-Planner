import Navbar from '../components/Navbar';

function About() {
    return (
        <div>
            <Navbar />
            <h1 className="px-8 py-10 text-4xl font-semibold"
                style={{ fontFamily: "Poppins, sans-serif" }}>
                About{" "}
                <span className="text-5xl text-cyan-800"
                      style={{ fontFamily: "Merriweather, sans-serif" }}>
                    College Planner
                </span>
            </h1>

            <p className="px-8">
                My goal is to provide high school students with a tool to store all of the necessary information needed for college apps in one place, that is simple to navigate.
            </p> 

        </div>
    );
}

export default About;