import { useState } from "react";

import Navbar from '../components/Navbar';
import CalendarHeader from '../components/Calendar/CalendarHeader';
import CalendarGrid from '../components/Calendar/CalendarGrid';

export type Task = {
    id: number;
    date: string; // format: "YYYY-MM-DD"
    title: string;
};

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [tasks, setTasks] = useState<Task[]>([]);

    const monthName = currentDate.toLocaleString("default", {
        month: "long",
    });

    const year = currentDate.getFullYear();

    const previousMonth = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() - 1
            )
        );
    };

    const nextMonth = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1
            )
        );
    };

    function addTask(date: string, title: string) {
        setTasks((prev) => [
            ...prev,
            { id: Date.now(), date, title },
        ]);
    }

    return (
        <div>
            <Navbar />
            <h1 className="px-6 py-5 text-3xl font-semibold">
                Calendar
            </h1>

            <div className="max-w-6xl mx-auto px-8 py-8">

                <CalendarHeader
                    month={monthName}
                    year={year}
                    previousMonth={previousMonth}
                    nextMonth={nextMonth}
                />

                <CalendarGrid
                    currentDate={currentDate}
                    tasks={tasks}
                    onAddTask={addTask}
                />

            </div>

        </div>
    );
}