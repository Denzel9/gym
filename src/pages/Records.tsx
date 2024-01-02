import { FunctionComponent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md'
import { CalendarProviderContext } from '../providers/CalendarProvider'
import classNames from 'classnames'

const Records: FunctionComponent = () => {
  const { calendar, lastTraining } = useContext(CalendarProviderContext)
  const [active, setActive] = useState(1)
  const uniqueExercise: { [exercise: string]: number[] } = {}
  const exercises = calendar?.map((el) => el.training).flat()
  const navigate = useNavigate()

  for (let i = 0; i < exercises?.length; i++) {
    const element = exercises[i]
    const max = element?.sets?.map((el) => el.weight)
    uniqueExercise[element?.exercise] = uniqueExercise[element?.exercise]?.concat(max) || max
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} className=" flex items-center">
        <MdArrowBackIos className=" text-3xl" />
        Назад
      </button>
      <h1 className=" text-3xl mt-5">Рекорды:</h1>
      <div className=" flex justify-around bg-base rounded-lg  mt-5 border border-gold">
        <button
          onClick={() => setActive(1)}
          className={classNames(
            active === 1 && ' bg-gold',
            ' w-1/2 p-2 text-center border-r border-gold'
          )}
        >
          За все время
        </button>
        <button
          onClick={() => setActive(2)}
          className={classNames(
            active === 2 && 'bg-gold',
            'w-1/2 p-2 text-center border-l border-gold'
          )}
        >
          Последние
        </button>
      </div>
      {!lastTraining?.training.length && <h2>Нет завершенных тренировок</h2>}

      {
        active === 1 && (
          <div className=" mt-5">
            {Object.entries(uniqueExercise).map((el) => {
              return (
                <div key={el[0]} className=" flex items-center gap-2">
                  <p className=" text-xl">{el[0]}:</p>
                  <p>{el[1].length && Math.max(...el[1])} кг.</p>
                </div>
              )
            })}
          </div>
        )
      }

      {
        active === 2 && (
          <div className=" mt-5">
            {lastTraining?.training.map((el) => {
              const lastTreningRecords = el.sets.map((el) => el.weight)
              return (
                <div key={el.exercise} className=" flex items-center gap-2">
                  <p className=" text-xl">{el.exercise}:</p>
                  <p>{lastTreningRecords.length && Math.max(...lastTreningRecords)} кг.</p>
                </div>
              )
            })}
          </div>
        )
      }
    </div>
  )
}

export default Records
