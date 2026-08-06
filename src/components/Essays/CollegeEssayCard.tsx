export default function CollegeEssayCard() {
    return (
        <div>
            <div className="bg-orange-50 rounded-2xl shadow-md p-6">
                <h2 className="font-semibold">
                    University of Washington
                </h2>

                <div>
                    <p className="text-sm text-gray-500 mb-2">
                        Why UW?
                    </p>

                    <div className="bg-gray-50 border rounded-lg p-3">
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
                    </div>

                </div>

            </div>
        </div>

    );
}