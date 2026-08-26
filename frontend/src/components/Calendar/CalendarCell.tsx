import { useState } from "react";
import type { Task } from "../../pages/Calendar";

interface CalendarCellProps {
    day: number | null;
    tasks: Task[];
    onAddTask?: (title: string) => void;
}

export default function CalendarCell({
    day,
    tasks,
    onAddTask,
}: CalendarCellProps) {
    const [adding, setAdding] = useState(false);
    const [title, setTitle] = useState("");

    function handleSubmit() {
        if (title.trim() && onAddTask) {
            onAddTask(title.trim());
        }
        setTitle("");
        setAdding(false);
    }

    return (
        <div className="border rounded-lg h-28 p-2 overflow-y-auto">

            {day && (
                <div className="flex items-center justify-between">
                    <p className="font-semibold">
                        {day}
                    </p>
                    <button
                        onClick={() => setAdding((a) => !a)}
                        className="text-xs text-emerald-600 hover:text-emerald-800"
                    >
                        +
                    </button>
                </div>
            )}

            {adding && (
                <div className="mt-1">
                    <input
                        autoFocus
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                        onBlur={handleSubmit}
                        placeholder="Task..."
                        className="w-full text-xs border rounded px-1 py-0.5"
                    />
                </div>
            )}

            {tasks.map((task) => (
                <p key={task.id} className="text-xs bg-emerald-50 text-emerald-800 rounded px-1 mt-1 truncate">
                    {task.title}
                </p>
            ))}

        </div>
    );
}