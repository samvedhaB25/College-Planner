interface CalendarHeaderProps {
    month: string;
    year: number;
}

export default function CalendarHeader({
    month,
    year,
}: CalendarHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-6">

            <button>{"<"}</button>

            <h2 className="text-3xl font-semibold">
                {month} {year}
            </h2>

            <button>{">"}</button>

        </div>
    );
}