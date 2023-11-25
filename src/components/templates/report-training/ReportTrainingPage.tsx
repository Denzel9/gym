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

  useEffect(() => {
    dispatch(saveTraining())
    dispatch(saveTimer())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleStop = () => {
    dispatch(reset())
    dispatch(stopTraining())
    dispatch(startTraining())
  }
  return (
    <div>
      <h1 className=" text-2xl">Отчет о тренировке</h1>
      <div className=" flex items-center gap-3">
        <p>Продолжительность тренировки:</p>
        <Timer isBegining={isBegining} time={time} />
      </div>
      {isTraining && (
        <button onClick={() => setIsReport(!isReport)}>Показать отчет по упражнениям</button>
      )}
      {(isReport || !isTraining) && (
        <div>
          {temporaryTraining.map((el) => {
            return (
              <div className=" bg-base mb-5 rounded-xl p-2 border border-gold" key={el[0]}>
                <h2 className=" text-xl">{el[0]}</h2>
                {el[1].map((el, i) => {
                  return (
                    <div className=" flex items-center gap-2">
                      <p>{`Подход ${i + 1}:`}</p>
                      <p>{`${el.weight} кг. на ${el.repeat} раз  `}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      )}
      {isTraining && (
        <>
          <Link onClick={() => dispatch(setIsBegining())} to={'/training'}>
            Продолжить тренировку
          </Link>
          <button onClick={handleStop}>Закончить тренировку</button>
        </>
      )}
    </div>
  )
}

export default ReportTrainingPage
