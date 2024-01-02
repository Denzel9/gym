import { FunctionComponent, useContext } from 'react'
import { Link } from 'react-router-dom'
import { TODAY, TOMORROW } from '../../../helpers/getDate'
import { UserProviderContext } from '../../../providers/UserProvider'
import { useUser } from '@clerk/clerk-react'
import Carusel from './carusel/Carusel'
import { CalendarProviderContext } from '../../../providers/CalendarProvider'
import { TrainingDayInterface } from '../../../types/calendar.interface'

const MainPage: FunctionComponent = () => {
  const { user } = useUser()
  const { name } = useContext(UserProviderContext)
  const { calendar } = useContext(CalendarProviderContext)

  const sortCalendar = calendar?.sort((a, b) => +a?.date.slice(0, 2) - +b?.date.slice(0, 2))
  const todayTrining = sortCalendar?.find((el) => el?.date === TODAY)
  const nextTraining = sortCalendar?.find((el) => {
    const traininDate = el.date.split('.')
    const todayDate = TODAY.split('.')

    if (
      (el.training.length && traininDate[0] > todayDate[0]) ||
      traininDate[1] > todayDate[1] ||
      traininDate[2] > todayDate[2]
    ) {
      return el
    }
    return null
  })

  const lastTraining = sortCalendar?.find(
    (el) =>
      el.training.length &&
      el.date.slice(0, 2) < TODAY.slice(0, 2) &&
      el.date.slice(4, 6) === TODAY.slice(4, 6)
  )
  const isTrainingDay = (
    todayTrining: TrainingDayInterface,
    nextTraining: TrainingDayInterface
  ) => {
    if (todayTrining?.training?.length) return todayTrining?.date === TODAY && 'Сегодня'
    if (!todayTrining?.training?.length)
      return nextTraining?.date === TOMORROW ? 'Завтра' : nextTraining?.date
  }
  return (
    <main>
      <div className=" mt-5">
        <Carusel name={name} img={user?.imageUrl!} />

        <div className="mt-5 w-full bg-white bg-opacity-40 p-2 rounded-lg relative h-16">
          {todayTrining?.training.length ? (
            <h2>Следующая тренировка:</h2>
          ) : (
            <h2>Следующая тренировка:</h2>
          )}
          <span>{isTrainingDay(todayTrining!, nextTraining!)}</span>

          {!!todayTrining?.training.length && (
            <Link to={'/training'} className=" bg-gold px-4 py-2 rounded-lg absolute right-5 mt-2">
              Начать
            </Link>
          )}
        </div>

        {lastTraining?.training.length && (
          <div className=" mt-5 w-full bg-white bg-opacity-40 p-2 rounded-lg">
            <div className=" flex justify-between">
              <h2>Предыдущая тренировка:</h2>
              <span>{lastTraining?.date}</span>
            </div>
            <Link to={'/training'}>Отчет</Link>
          </div>
        )}
      </div>
    </main>
  )
}

export default MainPage
