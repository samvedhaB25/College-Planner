import { useState } from "react";

import Navbar from '../components/Navbar';
import CalendarHeader from '../components/Calendar/CalendarHeader';
import CalendarGrid from '../components/Calendar/CalendarGrid';

export default function Calendar() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];

    const [currentDate, setCurrentDate] = useState(new Date());

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

                <CalendarGrid />

            </div>

        </div>
    );
}