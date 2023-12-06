import { FunctionComponent, useContext } from 'react'
import { UserProviderContext } from '../providers/UserProvider'
import { TODAY } from '../helpers/getDate'
import { Link } from 'react-router-dom'

const Main: FunctionComponent = () => {
  const { name, calendar } = useContext(UserProviderContext)
  const todayTrining = calendar?.find((el) => el.date === TODAY)

  return (
    <main className="">
      <h1 className=" text-3xl">С возвращение,</h1>
      <p className=" text-3xl">{name}</p>

      {todayTrining?.training && (
        <div className=" mt-5">
          <p>Сегодня день тренировки</p>
          <Link to={'/training'}>Начать</Link>
        </div>
      )}
    </main>
  )
}
export default Main
