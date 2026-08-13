import { useState } from "react";

export default function NotesCard() {

    const [notes, setNotes] = useState("");

    return (
        <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-xl font-semibold mb-4">
                Notes
            </h2>

            <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Write anything here..."
                className="w-full h-48 border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

        </div>
    );
}