import CalendarCell from "./CalendarCell";

export default function CalendarGrid() {
    const weekdays = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ];

    const days = [
        null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    ];

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
                    />

                ))}

            </div>

        </div>
    );
}

