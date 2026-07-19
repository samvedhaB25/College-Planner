import Navbar from '../components/Navbar';
import FeatureCard from "../components/FeatureCard";

function Features() {
    return (
        <div>
            <Navbar />
            <h1 className="flex flex-col items-center justify-center text-center py-15 text-4xl font-semibold"
                style={{ fontFamily: "Poppins, sans-serif" }}>
                Features
            </h1>

            <div className="flex flex-wrap justify-center gap-8">
                <FeatureCard
                    icon="📋"
                    title="Colleges"
                    description="Keep track of where you're applying."
                />

                <FeatureCard
                    icon="📔"
                    title="Essay Tracker"
                    description="Your personal statement and supplemental essays in one place!"
                />

                <FeatureCard
                    icon="📆"
                    title="Calendar"
                    description="Let's you see what you need to do on a weekly & monthly basis."
                />

            </div>

        </div>
    );
}

export default Features;