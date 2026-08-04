import CalendarCell from "./CalendarCell";

interface CalendarGridProps {
    currentDate: Date;
}

export default function CalendarGrid({
    currentDate,
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

    // JavaScript trick to calculating the number of days in a month.
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

