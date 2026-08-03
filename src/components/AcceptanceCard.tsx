interface AcceptanceCardProps {
    college: {
        acceptRate: string;
        iSAcceptRate: string;
        oSAcceptRate: string;
    };
}

export default function AcceptanceCard({
    college,
}: AcceptanceCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-xl font-semibold mb-6">
                Acceptance Rate
            </h2>

            <div className="flex flex-col items-center">

                <div className="w-36 h-36 rounded-full bg-blue-100 border-4 border-blue-200 flex items-center justify-center">

                    <p className="text-4xl font-bold text-blue-700">
                        {college.acceptRate}
                    </p>

                </div>

                <div className="mt-5 space-y-2">

                    <p>
                        In-State:
                        <span className="font-semibold ml-2">
                            {college.iSAcceptRate}
                        </span>
                    </p>

                    <p>
                        Out-of-State:
                        <span className="font-semibold ml-2">
                            {college.oSAcceptRate}
                        </span>
                    </p>

                </div>

            </div>

        </div>
    );
}