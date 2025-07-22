import PropTypes from "prop-types";
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  isToday,
} from "date-fns";
import { MonthDayCell } from "./MonthDayCell";

export function MonthDays({ targetDate }) {
  const firstDayOfMonth = startOfMonth(targetDate);
  const lastDayOfMonth = endOfMonth(targetDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const firstDayOfFirstWeekOfMonth = startOfWeek(firstDayOfMonth);
  const previousMonthDays = eachDayOfInterval({
    start: firstDayOfFirstWeekOfMonth,
    end: firstDayOfMonth,
  });

  const lastDayOfLastWeekOfMonth = endOfWeek(lastDayOfMonth);
  const nextMonthDays = eachDayOfInterval({
    start: lastDayOfMonth,
    end: lastDayOfLastWeekOfMonth,
  });

  const allDays = [
    ...previousMonthDays.slice(0, -1),
    ...daysInMonth,
    ...nextMonthDays.slice(1),
  ];

  return (
    <>
      {allDays.map((day) => (
        <MonthDayCell
          day={day}
          key={day.toISOString()}
          isCurrentMonth={daysInMonth.includes(day)}
          isToday={isToday(day)}
        />
      ))}
    </>
  );
}

MonthDays.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
};
