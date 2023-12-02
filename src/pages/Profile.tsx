import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import { FunctionComponent, useEffect, useState } from 'react'
import '../styles/userButton.css'
import { UserService } from '../services/userService'
const Profile: FunctionComponent = () => {
  const { user, isSignedIn, isLoaded } = useUser()
  const [currentUser, setCurrentUser] = useState({})

  const isSign = () => {
    UserService.findUserById('user_2YlPJwLIdFxjQFMz3tyGn7VRVUR').then((res) => setCurrentUser(res))
  }
  useEffect(() => isSign(), [])

  console.log(currentUser)
  return (
    <>
      {!isLoaded && <h1>Загрузка</h1>}
      <div className=" bg-white bg-opacity-60 rounded-xl p-2 text-black">
        <div className=" flex items-start justify-between">
          <img className=" rounded-full w-24" src={user?.imageUrl} alt="person" />
          <p>Уровень: GOLD</p>
        </div>
        <p>Имя: {user?.firstName}</p>
        <p>Почта: {user?.primaryEmailAddress?.emailAddress}</p>
        <p>Предыдущая тренировка: 23.11.23</p>
        <p>Следующая тренировка: 25.11.23</p>
      </div>

      <p>История тренировок</p>
      <p>Расписание</p>
      <p>Отчет о последней тренировке</p>
      <p>Рекорды</p>

      <div className=" absolute right-5 bottom-40 border rounded-full border-gold">
        <UserButton />
      </div>
      {isSignedIn ? (
        <SignOutButton>Выйти</SignOutButton>
      ) : (
        <SignInButton redirectUrl="/sign-in">Войти</SignInButton>
      )}
    </>
  )
}

export default Profile
