import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import { FunctionComponent, useContext } from 'react'
import '../styles/userButton.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserProviderContext } from '../providers/UserProvider'
import { TODAY } from '../helpers/getDate'

const Profile: FunctionComponent = () => {
  const navigate = useNavigate()

  const { user, isSignedIn, isLoaded } = useUser()
  const { name, calendar } = useContext(UserProviderContext)

  const lastTraining = calendar.find((el) => el.training.length && el.date < TODAY)
  const nextTraining = calendar.find((el) => el.training.length && el.date > TODAY)

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
          <p>Предыдущая тренировка: {lastTraining?.date}</p>
          <p>Следующая тренировка: {nextTraining?.date}</p>
        </div>
      </div>

      <div className=" flex flex-col mt-5 text-xl">
        <Link to={'/calendar'}>Расписание</Link>
        <Link to={'/lastTraining'}>Отчет о последней тренировке</Link>
        <Link to={'/records'}>Рекорды</Link>
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
