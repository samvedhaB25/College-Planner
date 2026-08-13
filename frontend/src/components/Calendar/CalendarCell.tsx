interface CalendarCellProps {
    day: number | null;
}

export default function CalendarCell({
    day,
}: CalendarCellProps) {
    return (
        <div className="border rounded-lg h-28 p-2">

            {day && (
                <p className="font-semibold">
                    {day}
                </p>
            )}

        </div>
    );
}