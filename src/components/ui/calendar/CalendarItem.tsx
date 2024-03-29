import { FunctionComponent, useEffect } from 'react'
import classNames from 'classnames'
import { TODAY_NUMBER, currentMonth } from '../../../helpers/getDate'
import { TrainingDayInterface } from '../../../types/calendar.interface'
import { CgGym } from 'react-icons/cg'

const CalendarItem: FunctionComponent<{
  title: number
  trainingDay: TrainingDayInterface[]
  dayfilter: string
  setDayFilter(dayfilter: string): void
  monthFilter: number
  selectedDay: number
  setSelectedDay(selectedDay: number): void
  yearFilter: number
}> = ({
  title,
  trainingDay,
  dayfilter,
  setDayFilter,
  monthFilter,
  selectedDay,
  setSelectedDay,
  yearFilter,
}) => {
  const isTrainingDay = trainingDay?.find(
    (el) =>
      el.date.slice(0, 2) === String(title).padStart(2, '0') &&
      +el.date.slice(3, 4) === monthFilter &&
      +el.date.slice(6, 12) === yearFilter
  )

  useEffect(() => setSelectedDay(0), [monthFilter, setSelectedDay])

  const handleSelectDay = () => {
    setDayFilter(String(title).padStart(2, '0'))
    setSelectedDay(title)
  }
  return (
    <div
      className={classNames(
        +TODAY_NUMBER === title && monthFilter === currentMonth && ' bg-green-800',
        selectedDay === title && ' bg-gold',
        +dayfilter === title && ' bg-gold',
        ' w-full bg-base text-center text-lg mt-2 relative'
      )}
      onClick={handleSelectDay}
    >
      {isTrainingDay?.training && (
        <CgGym
          className={classNames(
            dayfilter === String(title).padStart(2, '0') && ' bg-white',
            ' absolute left-0 -top-2 text-xl text-gold rounded-full z-10'
          )}
        />
      )}
      <span>{title}</span>
    </div>
  )
}

export default CalendarItem
