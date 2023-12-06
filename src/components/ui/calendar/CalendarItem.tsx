import { FunctionComponent } from 'react'
import { TrainingDayInterface } from '../../../types/user.interface'
import classNames from 'classnames'

const CalendarItem: FunctionComponent<{
  title: number
  trainingDay: TrainingDayInterface[]
  dayfilter: string
  setDayFilter(dayfilter: string): void
}> = ({ title, trainingDay, dayfilter, setDayFilter }) => {
  const isTrainingDay = trainingDay?.find(
    (el) => el.date.slice(0, 2) === String(title).padStart(2, '0')
  )

  return (
    <div
      className={classNames(
        dayfilter === String(title).padStart(2, '0') && ' bg-gold',
        ' w-full bg-base  text-center text-lg mt-2 relative'
      )}
      onClick={() => setDayFilter(String(title).padStart(2, '0'))}
    >
      {isTrainingDay?.training && (
        <div
          className={classNames(
            dayfilter === String(title).padStart(2, '0') && ' bg-white',
            ' absolute right-0 top-0 bg-gold w-2 h-2 rounded-full z-10'
          )}
        ></div>
      )}
      <span>{title}</span>
    </div>
  )
}

export default CalendarItem
