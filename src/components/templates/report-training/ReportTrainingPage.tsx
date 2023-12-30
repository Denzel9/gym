import { FunctionComponent, useEffect, useState } from 'react'
import Timer from '../../Timer'
import { useGetExercises } from '../../../hooks/useGetExercises'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { reset, setIsBegining, saveTimer } from '../../../redux/reducer'
import { saveTraining, startTraining, stopTraining } from '../../../redux/currentTraining'

const ReportTrainingPage: FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const [isReport, setIsReport] = useState(false)
  const { temporaryTraining } = useGetExercises()
  const isBegining = useAppSelector((state) => state.timer.isBegining)
  const isTraining = useAppSelector((state) => state.currentTraining.isTraining)
  const time = useAppSelector((state) => state.timer.temporaryTimer)
  const allExercise = Object.entries(
    useAppSelector((state) => state.currentTraining.temporaryTraining)
  )
  const lostExercise = allExercise.filter((el) => !el[1].length).map((el) => el[0])

  console.log(lostExercise)
  useEffect(() => {
    dispatch(saveTraining())
    dispatch(saveTimer())
  }, [dispatch])

  const handleStop = () => {
    dispatch(reset())
    dispatch(stopTraining())
    dispatch(startTraining())
  }

  return (
    <div className=" relative h-5/6">
      <h1 className=" text-2xl">Отчет о тренировке</h1>
      <div className=" flex items-center gap-3 mt-5">
        <p>Продолжительность тренировки:</p>
        <Timer isBegining={isBegining} time={time} />
      </div>
      {isTraining && !isReport && (
        <button onClick={() => setIsReport(!isReport)}>Показать отчет по упражнениям</button>
      )}
      {(isReport || !isTraining) && (
        <div>
          {temporaryTraining.map((el) => {
            if (el[1].length)
              return (
                <div className=" mt-5 bg-base mb-5 rounded-xl p-2 border border-gold" key={el[0]}>
                  <h2 className=" text-xl">{el[0]}</h2>
                  {el[1].map((el, i) => {
                    return (
                      <div key={i} className=" flex items-center gap-2">
                        <p>{`Подход ${i + 1}:`}</p>
                        <p>{`${el.weight} кг. на ${el.repeat} раз`}</p>
                      </div>
                    )
                  })}
                </div>
              )
            return null
          })}
        </div>
      )}
      <div>
        <h2>Пропущенные упражнения:</h2>
        <ul className=" mt-2">
          {lostExercise.map((el) => {
            return <li key={el}>{el}</li>
          })}
        </ul>
      </div>
      {isTraining && (
        <div className="rounded-lg mt-5">
          <Link
            onClick={() => dispatch(setIsBegining())}
            to={'/training'}
            className="bg-gold block px-4 py-2 rounded-tl-lg rounded-tr-lg w-fit"
          >
            Продолжить тренировку
          </Link>
          <button
            onClick={handleStop}
            className=" bg-base block px-6 py-2 rounded-bl-lg rounded-br-lg border-b border-gold"
          >
            Закончить тренировку
          </button>
        </div>
      )}
    </div>
  )
}

export default ReportTrainingPage
