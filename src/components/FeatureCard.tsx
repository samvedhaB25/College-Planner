export default function FeatureCard({title, description, icon}) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 w-72 
                        hover:shadow-xl hover:-translate-y-1 
                        transition duration-300">
            
            <div className="text-4xl mb-4">
                {icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
            </h3>

            <p className="text-gray-600">
                {description}
            </p>

        </div>

    );
}