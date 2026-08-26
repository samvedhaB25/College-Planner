import { useState } from "react";
import type { College, Essay } from "../../data/data";

interface CollegeEssayCardProps {
    college: College;
    essays: Essay[];
}

export default function CollegeEssayCard({
    college,
    essays,
}: CollegeEssayCardProps) {
    const [docUrls, setDocUrls] = useState<Record<number, string>>(
        Object.fromEntries(essays.map((e) => [e.id, e.googleDocUrl ?? ""]))
    );

    function openDoc(essayId: number) {
        const url = docUrls[essayId];
        if (url) {
            window.open(url, "_blank");
        } else {
            window.open("https://docs.google.com/document/create", "_blank");
        }
    }

    return (
        <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-xl font-semibold mb-6">
                {college.name}
            </h3>

            {
                essays.map((essay) => (
                    <div key={essay.id} className="mb-6">

                        <p className="text-sm text-gray-500 mb-2">
                            {essay.title}
                        </p>

                        <div className="bg-gray-50 border rounded-lg p-3">
                            <p className="text-gray-700 text-sm leading-6">
                                {essay.preview}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-y-4 mt-4 mb-4">
                            <p className="text-gray-500">
                                Word Count
                            </p>

                            <p className="font-medium">
                                {essay.wordCount} / {essay.wordLimit}
                            </p>
                        </div>

                        <input
                            type="text"
                            value={docUrls[essay.id]}
                            onChange={(e) =>
                                setDocUrls((prev) => ({ ...prev, [essay.id]: e.target.value }))
                            }
                            placeholder="Paste your Google Doc link here"
                            className="w-full border rounded-lg px-3 py-2 text-sm mb-2"
                        />

                        <button
                            onClick={() => openDoc(essay.id)}
                            className="w-full bg-sky-200 text-gray py-2 rounded-lg hover:bg-blue-700 transition text-sm"
                        >
                            {docUrls[essay.id] ? "Open Google Doc" : "Create New Google Doc"}
                        </button>

                    </div>
                ))
            }

        </div>
    );
}