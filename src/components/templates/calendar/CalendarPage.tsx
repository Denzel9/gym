import { FunctionComponent, useContext, useEffect, useState } from 'react'
import Calendar from '../../ui/calendar/Calendar'
import CalendarDay from './CalendarDay'
import { UserProviderContext } from '../../../providers/UserProvider'
import {
  TODAY_NUMBER,
  currentMonth,
  currentYear,
  getMonth,
  getMonthCalendar,
} from '../../../helpers/getDate'
import { useDeleteTrainingDay } from '../../../hooks/query-hooks/useCalendar'
import CalendarPlaningDay from './CalendarPlaningDay'

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { CalendarProviderContext } from '../../../providers/CalendarProvider'

const CalendarPage: FunctionComponent = () => {
  const { id } = useContext(UserProviderContext)
  const { calendar, getTraining } = useContext(CalendarProviderContext)
  const [yearFilter, setYearFilter] = useState(currentYear)
  const [monthFilter, setMonthFilter] = useState(+String(currentMonth).padStart(2, '0'))
  const [dayfilter, setDayFilter] = useState(TODAY_NUMBER)

  const trainingDay = getTraining(
    `${dayfilter}.${String(monthFilter + 1).padStart(2, '0')}.${yearFilter}`
  )

  const [selectedDay, setSelectedDay] = useState(0)
  const [plan, setPlan] = useState(false)
  const [trainingType, setTrainingType] = useState('Верхнеплечевой')

  useEffect(() => {
    if (monthFilter === currentMonth) setDayFilter(TODAY_NUMBER)
    else setDayFilter(String(1).padStart(2, '0'))
  }, [monthFilter])

  const { deleteTraining } = useDeleteTrainingDay(
    calendar,
    id,
    `${dayfilter}.${String(monthFilter + 1).padStart(2, '0')}.${yearFilter}`
  )

  const handleAddYear = () => {
    setMonthFilter(0)
    setYearFilter(yearFilter + 1)
  }

  const handleDeleteYear = () => {
    setMonthFilter(11)
    setYearFilter(yearFilter - 1)
  }

  return (
    <div className=" pb-24">
      <div className=" flex items-baseline justify-between">
        <h1 className=" text-3xl">Календарь</h1>
        <div className=" flex items-center gap-2">
          <button
            onClick={() =>
              monthFilter === 0 ? handleDeleteYear() : setMonthFilter((prev) => prev - 1)
            }
          >
            <MdArrowBackIos />
          </button>
          <p>{getMonthCalendar(monthFilter)}</p>
          <button
            onClick={() =>
              monthFilter === 11 ? handleAddYear() : setMonthFilter((prev) => prev + 1)
            }
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
      <Calendar
        monthFilter={monthFilter}
        dayfilter={dayfilter}
        setDayFilter={setDayFilter}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        yearFilter={yearFilter}
      />
      <CalendarDay
        monthFilter={monthFilter}
        yearFilter={yearFilter}
        dayfilter={dayfilter}
        dayTraining={trainingDay!}
        setPlan={setPlan}
        date={`${dayfilter}.${currentMonth + 1}.${currentYear}`}
      />
      {!!trainingDay?.training?.length ? (
        <div className=" flex justify-center">
          <button
            onClick={() => deleteTraining()}
            className=" bg-base px-4 py-2 rounded-lg border border-gold mt-5 "
          >
            Отменить тренировку
          </button>
        </div>
      ) : null}
      <CalendarPlaningDay
        monthFilter={monthFilter}
        yearFilter={yearFilter}
        setTrainingType={setTrainingType}
        trainingType={trainingType}
        setPlan={setPlan}
        plan={plan}
        id={id}
        dayfilter={dayfilter}
        calendar={calendar}
        date={`${dayfilter} ${getMonth(currentMonth)}`}
      />
    </div>
  )
}

export default CalendarPage
