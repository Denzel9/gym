import { FunctionComponent, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TODAY, TOMORROW } from '../../../helpers/getDate'
import { UserProviderContext } from '../../../providers/UserProvider'
import { useUser } from '@clerk/clerk-react'
import Carusel from './carusel/Carusel'
import { CalendarProviderContext } from '../../../providers/CalendarProvider'
import { TrainingDayInterface } from '../../../types/calendar.interface'
import { MdArrowRight, MdCalendarMonth } from 'react-icons/md'

const MainPage: FunctionComponent = () => {
  const { user } = useUser()
  const { name, userInfo } = useContext(UserProviderContext)
  const { lastTraining, todayTraining, nextTraining } = useContext(CalendarProviderContext)
  const navigate = useNavigate()

  const completeUserInfo =
    userInfo &&
    Object.entries(userInfo)
      .flat()
      .filter(Number)
      .every((el) => !el)

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

        <div className="mt-5 w-full bg-white bg-opacity-40 p-2 rounded-lg  h-16 relative">
          <div className=" flex justify-between">
            <h2>Следующая тренировка:</h2>
            <span className=" flex gap-2 items-center">
              {isTrainingDay(todayTraining!, nextTraining!)}
              <MdCalendarMonth className=" text-xl" />
            </span>
          </div>
          {todayTraining?.training.length ? (
            <Link to={'/training'} className=" bg-gold px-4 py-2 rounded-lg absolute left-5 mt-2">
              Начать
            </Link>
          ) : nextTraining?.training.length ? (
            <button
              onClick={() => navigate('/calendar', { state: { day: nextTraining.date } })}
              className=" bg-gold px-4 py-2 rounded-lg absolute left-5 mt-2"
            >
              Посмотреть
            </button>
          ) : (
            <Link to={'/calendar'} className=" bg-gold px-4 py-2 rounded-lg absolute left-5 mt-2">
              Запланировать
            </Link>
          )}
        </div>

        {lastTraining?.training.length && (
          <div className=" relative h-16 mt-8 w-full bg-white bg-opacity-40 p-2 rounded-lg">
            <div className=" flex justify-between">
              <h2>Предыдущая тренировка:</h2>
              <span className=" flex gap-2 items-center">
                {lastTraining?.date}
                <MdCalendarMonth className=" text-xl" />
              </span>
            </div>
            <Link
              to={'/lasttraining'}
              className=" bg-gold px-4 py-2 rounded-lg absolute left-5 mt-2"
            >
              Отчет
            </Link>
          </div>
        )}
      </div>

      {completeUserInfo && (
        <div className=" mt-8 w-full bg-white bg-opacity-40 p-2 rounded-lg ">
          <Link to={'/editProfile'} className="flex items-center">
            <p>Запоните информацию о себе</p>
            <MdArrowRight className=" text-3xl mt-1" />
          </Link>
        </div>
      )}
    </main>
  )
}

export default MainPage
