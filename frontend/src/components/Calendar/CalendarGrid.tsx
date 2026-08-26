import CalendarCell from "./CalendarCell";
import type { Task } from "../../pages/Calendar";

interface CalendarGridProps {
    currentDate: Date;
    tasks: Task[];
    onAddTask: (date: string, title: string) => void;
}

export default function CalendarGrid({
    currentDate,
    tasks,
    onAddTask,
}: CalendarGridProps) {
    const weekdays = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ];

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(
        year,
        month + 1,
        0
    ).getDate();

    const firstDay = new Date(
        year,
        month,
        1
    ).getDay();

    const days: (number | null)[] = [];

    for (let i = 0; i < firstDay; i++) {
        days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        days.push(day);
    }

    while (days.length < 42) {
        days.push(null);
    }

    function dateKey(day: number) {
        const mm = String(month + 1).padStart(2, "0");
        const dd = String(day).padStart(2, "0");
        return `${year}-${mm}-${dd}`;
    }

    return (
        <div>
            <div className="grid grid-cols-7 gap-2 mb-2">

                {weekdays.map((day) => (
                    <div
                        key={day}
                        className="text-center font-semibold"
                    >

                        {day}
                    </div>
                ))}

            </div>

            <div className="grid grid-cols-7 gap-2">

                {days.map((day, index) => (

                    <CalendarCell
                        key={index}
                        day={day}
                        tasks={day ? tasks.filter((t) => t.date === dateKey(day)) : []}
                        onAddTask={day ? (title) => onAddTask(dateKey(day), title) : undefined}
                    />

                ))}

            </div>

        </div>
    );
}