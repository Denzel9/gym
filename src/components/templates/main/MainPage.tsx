import { FunctionComponent, useContext } from 'react'
import { Link } from 'react-router-dom'
import { TODAY, TOMORROW } from '../../../helpers/getDate'
import { UserProviderContext } from '../../../providers/UserProvider'
import { useUser } from '@clerk/clerk-react'
import Carusel from './carusel/Carusel'
import { TrainingDayInterface } from '../../../types/user.interface'

const MainPage: FunctionComponent = () => {
  const { user } = useUser()
  const { name, calendar } = useContext(UserProviderContext)
  const sortCalendar = calendar?.sort((a, b) => +a?.date.slice(0, 2) - +b?.date.slice(0, 2))
  const todayTrining = sortCalendar?.find((el) => el?.date === TODAY)
  const nextTraining = sortCalendar?.find(
    (el) =>
      el.training.length &&
      el.date.slice(0, 2) > TODAY.slice(0, 2) &&
      el.date.slice(4, 6) === TODAY.slice(4, 6)
  )
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

        <div className="mt-5 w-full bg-white bg-opacity-40 p-2 rounded-lg">
          <div className=" flex justify-between">
            {todayTrining?.training.length ? (
              <h2>Следующая тренировка:</h2>
            ) : (
              <h2>Следующая тренировка не запланирована</h2>
            )}
            <span>{isTrainingDay(todayTrining!, nextTraining!)}</span>
          </div>
          {todayTrining?.training.length ? (
            <Link to={'/training'}>Начать</Link>
          ) : (
            <Link to={'/calendar'}>Запланировать</Link>
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
