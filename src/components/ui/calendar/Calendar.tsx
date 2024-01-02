import { FunctionComponent, useContext } from 'react'
import CalendarItem from './CalendarItem'
import { getMonthDays, weekDays } from '../../../helpers/getDate'
import { CalendarProviderContext } from '../../../providers/CalendarProvider'

const Calendar: FunctionComponent<{
  dayfilter: string
  setDayFilter(dayfilter: string): void
  monthFilter: number
  selectedDay: number
  setSelectedDay(selectedDay: number): void
  yearFilter: number
}> = ({ dayfilter, setDayFilter, monthFilter, selectedDay, setSelectedDay, yearFilter }) => {
  const { calendar } = useContext(CalendarProviderContext)
  const trainingDay = calendar?.filter((el) => el.training.length)

  return (
    <section>
      <div className=" flex justify-between my-3">
        {weekDays.map((el) => {
          return (
            <span key={el} className=" w-14 bg-base text-center">
              {el}
            </span>
          )
        })}
      </div>
      <div className=" grid grid-cols-7">
        {getMonthDays(monthFilter).map((el) => {
          return (
            <CalendarItem
              yearFilter={yearFilter}
              monthFilter={monthFilter}
              key={el}
              title={el}
              trainingDay={trainingDay!}
              dayfilter={dayfilter}
              setDayFilter={setDayFilter}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Calendar
