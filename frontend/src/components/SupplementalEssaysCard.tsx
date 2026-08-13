export default function SupplementalEssaysCard() {
    return (
        <div className="flex-1 bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-900">
                Supplemental Essays
            </h2>

            <div className="mt-4 space-y-4">

                <div className="border rounded-xl p-4">
                    <h3 className="font-semibold">
                        Essay 1
                    </h3>

                    <p className="text-gray-600 text-sm mt-2">
                        Prompt will go here.
                    </p>
                </div>

                <div className="border rounded-xl p-4">
                    <h3 className="font-semibold">
                        Essay 2
                    </h3>

                    <p className="text-gray-600 text-sm mt-2">
                        Prompt will go here.
                    </p>
                </div>

            </div>
        </div>


    );
}