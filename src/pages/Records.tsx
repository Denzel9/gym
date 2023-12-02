import { FunctionComponent, useContext } from 'react'
import { UserProviderContext } from '../providers/UserProvider'
import { TODAY } from '../helpers/getDate'
import { Link } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md'

const Records: FunctionComponent = () => {
  const { calendar } = useContext(UserProviderContext)

  const lastTraining = calendar?.find((el) => el.training.length && el.date < TODAY)

  const uniqueExercise: { [exercise: string]: number[] } = {}
  const exercises = calendar?.map((el) => el.training).flat()

  for (let i = 0; i < exercises?.length; i++) {
    const element = exercises[i]
    const max = element?.sets?.map((el) => el.weight)
    uniqueExercise[element?.exercise] = uniqueExercise[element?.exercise]?.concat(max) || max
  }

  return (
    <div>
      <Link to={'/profile'} className=" flex items-center">
        <MdArrowBackIos className=" text-3xl" />
        Назад
      </Link>
      <h1 className=" text-3xl mt-5">Рекорды:</h1>
      {Object.entries(uniqueExercise).map((el) => {
        return (
          <div key={el[0]} className=" flex items-center gap-2">
            <p>{el[0]}</p>
            <p>{Math.max(...el[1])}</p>
          </div>
        )
      })}
      {lastTraining?.training.map((el) => {
        const lastTreningRecords = el.sets.map((el) => el.weight)
        return (
          <div key={el.exercise} className=" flex items-center gap-2">
            <p>{el.exercise}</p>
            <p>{Math.max(...lastTreningRecords)}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Records
