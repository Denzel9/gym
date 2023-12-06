import { FunctionComponent, useContext, useState } from 'react'
import Calendar from '../../ui/calendar/Calendar'
import CalendarDay from './CalendarDay'
import { UserProviderContext } from '../../../providers/UserProvider'
import { TODAY_NUMBER, currentMonth, currentYear } from '../../../helpers/getDate'
import {
  useDeleteTrainingDay,
  useAddTrainingDay,
} from '../../../hooks/query-hooks/useUpdateCalendar'

const CalendarPage: FunctionComponent = () => {
  const [dayfilter, setDayFilter] = useState(TODAY_NUMBER)

  const { calendar, id } = useContext(UserProviderContext)
  const { deleteTraining } = useDeleteTrainingDay(
    calendar,
    id,
    `${dayfilter}.${currentMonth + 1}.${currentYear}`
  )
  const { mutateCalendar } = useAddTrainingDay(
    calendar,
    id,
    `${dayfilter}.${currentMonth + 1}.${currentYear}`
  )

  const dayTraining = calendar?.find((el) => el.date.slice(0, 2) === dayfilter)

  return (
    <div className=" pb-24">
      <h1 className=" text-3xl">Календарь</h1>
      <Calendar dayfilter={dayfilter} setDayFilter={setDayFilter} />
      <CalendarDay dayTraining={dayTraining!} mutateCalendar={mutateCalendar} />
      {dayTraining?.training?.length ? (
        <div className=" flex justify-center">
          <button
            onClick={() => deleteTraining()}
            className=" bg-base px-4 py-2 rounded-lg border border-gold mt-5 "
          >
            Отменить тренировку
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default CalendarPage
