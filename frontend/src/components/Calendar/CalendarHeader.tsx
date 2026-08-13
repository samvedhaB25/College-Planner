interface CalendarHeaderProps {
    month: string;
    year: number;
    previousMonth: () => void;
    nextMonth: () => void;
}

export default function CalendarHeader({
    month,
    year,
    previousMonth,
    nextMonth,
}: CalendarHeaderProps) {

    return (
        <div className="flex items-center justify-between mb-6">

            <button onClick={previousMonth}>{"<"}</button>

            <h2 className="text-3xl font-semibold">
                {month} {year}
            </h2>

            <button onClick={nextMonth}>{">"}</button>

        </div>
    );
}