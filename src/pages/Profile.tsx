import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import { FunctionComponent, useContext } from 'react'
import '../styles/userButton.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserProviderContext } from '../providers/UserProvider'
import { CalendarProviderContext } from '../providers/CalendarProvider'
import { MdAllInbox, MdCalendarMonth, MdEmojiEvents, MdOutlineDataUsage } from 'react-icons/md'

const Profile: FunctionComponent = () => {
  const navigate = useNavigate()

  const { user, isSignedIn, isLoaded } = useUser()
  const { name } = useContext(UserProviderContext)
  const { lastTraining, nextTraining } = useContext(CalendarProviderContext)

  return (
    <>
      {!isLoaded && <h1>Загрузка</h1>}
      <div className=" bg-white bg-opacity-60 rounded-xl p-2 text-black">
        <div className=" flex items-start justify-between">
          <img className=" rounded-full w-24" src={user?.imageUrl} alt="person" />
          <p>Уровень: GOLD</p>
        </div>
        <div className=" mt-3">
          <p>Имя: {name}</p>
          <p>Почта: {user?.primaryEmailAddress?.emailAddress}</p>
          {lastTraining?.date && <p>Предыдущая тренировка: {lastTraining?.date}</p>}
          {nextTraining?.date && <p>Следующая тренировка: {nextTraining?.date}</p>}
        </div>
      </div>

      <div className=" flex flex-col mt-5 text-xl">
        <Link to={'/calendar'} className=" flex gap-2 items-center">
          <MdCalendarMonth className=" text-xl" />
          <span>Расписание</span>
        </Link>
        <Link to={'/lastTraining'} className=" flex gap-2 items-center">
          <MdOutlineDataUsage className=" text-xl" />
          <span>Отчет о последней тренировке</span>
        </Link>
        <Link to={'/records'} className=" flex gap-2 items-center">
          <MdEmojiEvents className=" text-xl" />
          <span>Рекорды</span>
        </Link>
        <Link to={'/editProfile'} className=" flex gap-2 items-center">
          <MdAllInbox className=" text-xl" />
          <span>Личная информация</span>
        </Link>
      </div>

      <div className=" absolute right-5 bottom-40 border rounded-full border-gold">
        <UserButton />
      </div>
      {isSignedIn ? (
        <SignOutButton signOutCallback={() => navigate('/')}>Выйти</SignOutButton>
      ) : (
        <SignInButton redirectUrl="/sign-in">Войти</SignInButton>
      )}
    </>
  )
}

export default Profile
