export default function PersonalStatementCard() {
    return (
        <div>
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">
                    Personal Statement
                </h2>

                <div className="mb-5">
                    <p className="text-sm text-gray-500">
                        Prompt
                    </p>

                    <p className="font-medium">
                        Common App Personal Essay
                    </p>
                </div>

                <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">
                        Preview
                    </p>

                    <div className="bg-gray-50 border rounded-lg p-4">
                        <p className="text-gray-700 text-sm leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam...
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-y-4 mb-6">
                        <p className="text-gray-500">
                            Word Count
                        </p>

                        <p className="font-medium">
                            642 / 650
                        </p>

                        <p className="text-gray-500">
                            Status
                        </p>

                        <p className="font-medium">
                            Draft
                        </p>

                        <p className="text-gray-500">
                            Last Edited
                        </p>

                        <p className="font-medium">
                            August 5
                        </p>

                    </div>

                    <button className="w-full bg-sky-200 text-gray py-3 rounded-lg hover:bg-blue-700 transition">
                        Open Google Doc
                    </button>

                    

                </div>

            </div>

        </div>
    );
}