import { FunctionComponent, useContext, useState } from 'react'
import LastTrainingItem from './LastTrainingItem'
import { useNavigate } from 'react-router-dom'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import { Doughnut } from 'react-chartjs-2'
import { MdArrowBackIos } from 'react-icons/md'
import { CalendarProviderContext } from '../../../providers/CalendarProvider'
import { trainingType } from '../../../data/initTraning'

const LastTrainingPage: FunctionComponent = () => {
  const { lastTraining } = useContext(CalendarProviderContext)
  const [showStat, setShowStat] = useState(false)
  const navigate = useNavigate()
  ChartJS.register(ArcElement, Tooltip, Legend)
  const completeExercise = lastTraining?.training.filter((el) => el.sets.length).length

  const missExercise = lastTraining && lastTraining?.training?.length - completeExercise!
  console.log(lastTraining)
  const data = {
    labels: [],

    datasets: [
      {
        label: 'Упражнений',
        data: [missExercise, completeExercise],
        backgroundColor: ['rgba(250, 1, 1, 0.422)', 'rgba(2, 251, 43, 0.279)'],
        borderColor: ['rgba(250, 1, 1, 0.422)', 'rgba(2, 251, 43, 0.279)'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className=" pb-24">
      <button onClick={() => navigate(-1)} className=" flex items-center">
        <MdArrowBackIos className=" text-3xl" />
        Назад
      </button>
      <p className=" text-3xl mt-3">Итоги тренировки</p>
      <p>Дата тренировки: {lastTraining?.date}</p>
      <p>Тип тренировки: {trainingType(+lastTraining?.type!)}</p>
      <div className=" flex mt-2">
        <div className=" w-3/6">
          <p>Кол-во завершенных упражнений</p>
          <Doughnut data={data} />
        </div>
        <div className=" w-3/6">
          <p>Кол-во завершенных упражнений</p>
          <Doughnut data={data} />
        </div>
      </div>
      <div className=" flex justify-center mt-10">
        <button
          onClick={() => setShowStat(!showStat)}
          className=" bg-base py-2 px-4 rounded-lg border border-gold shadow shadow-black"
        >
          {showStat ? 'Закрыть' : 'Статистика по упражнениям'}
        </button>
      </div>
      {showStat &&
        lastTraining?.training.map((el) => {
          return <LastTrainingItem key={el.exercise} {...el} />
        })}
    </div>
  )
}

export default LastTrainingPage
