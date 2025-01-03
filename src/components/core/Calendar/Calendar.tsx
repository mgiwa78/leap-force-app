import DatePicker from "react-datepicker";
import { getYear, getMonth } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
import { RenderIf } from "@/components/hoc/RenderIf";
import { Icon } from "@iconify/react";

interface InputProps {
  selectedDate: null | Date;
  setSelectedDate: (date: any) => void;
  placeholder?: string;
  label?: string;
}

const range = (start: number, end: number) => {
  const years = [];
  for (let i = start; i <= end; i++) {
    years.push(i);
  }
  return years;
};
const CalendarInput = ({
  selectedDate,
  setSelectedDate,
  placeholder,
  label,
}: InputProps) => {
  const years = range(1900, getYear(new Date()));
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="flex w-full flex-col">
      <RenderIf condition={!!label}>
        <p className="text-[10px] font-medium text-text2 mb-1">{label}</p>
      </RenderIf>
      <div className="w-full flex flex-col relative">
        <DatePicker
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              className="flex items-center justify-center gap-2"
              style={{ margin: 10 }}
            >
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                {"<"}
              </button>
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(Number(value))}
                className="px-2 py-1 border rounded"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
                className="px-2 py-1 border rounded"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                {">"}
              </button>
            </div>
          )}
          selected={selectedDate}
          onChange={(date) =>
            setSelectedDate(date?.toISOString().split("T")[0])
          }
          dateFormat={"dd/MM/yyyy"}
          placeholderText={placeholder}
          className="w-full p-3 h-[40px] bg-[#F1F1F1] text-sm text-gray-700  border-gray-300 rounded-lg focus:border-blue-500 placeholder:text-gray-400"
        />
        <Icon
          icon="ion:calendar-outline"
          className="text-primary absolute right-3 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default CalendarInput;
