import { FunctionComponent, useContext, useEffect, useRef } from 'react'
import { getMonth } from '../../../helpers/getDate'
import StartBtn from './StartBtn'
import { MdArrowForwardIos } from 'react-icons/md'
import TrainingBox from './training-box/TrainingBox'
import { useAppSelector } from '../../../hooks/useAppSelector'
import AddTrainingBtn from './AddTrainingBtn'
import classNames from 'classnames'
import { CalendarProviderContext } from '../../../providers/CalendarProvider'
import { Link } from 'react-router-dom'
import { trainingType } from '../../../data/initTraning'

const TrainingPage: FunctionComponent = () => {
  const { todayTraining } = useContext(CalendarProviderContext)
  const date = `${new Date().getDate()} ${getMonth(new Date().getUTCMonth())}`

  const ref = useRef<HTMLDivElement | null>(null)
  const isBegining = useAppSelector((state) => state.timer.isBegining)
  const trainingList = Object.keys(useAppSelector((state) => state.currentTraining.exercises))
  const handleScroll = () => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  }

  useEffect(() => {
    isBegining && handleScroll()
  }, [isBegining])
  console.log(todayTraining)

  return (
    <section className=" h-full">
      <div className={classNames(isBegining ? ' h-screen' : ' h-5/6')}>
        <h1 className=" text-5xl">Сегодня:</h1>
        <p className=" text-3xl">{date}</p>
        <div className=" flex items-center  h-5/6">
          {todayTraining?.training.length ? (
            <div>
              <h2 className=" text-3xl">Тип тренировки:</h2>
              <p className="text-2xl">{trainingType(+todayTraining?.type!)}</p>
              {isBegining && (
                <button
                  onClick={handleScroll}
                  className=" bg-base px-4 py-2 mt-2 rounded-xl flex items-center gap-2 border border-gold"
                >
                  <span>К упражнениям</span> <MdArrowForwardIos className=" mt-1 text-lg" />
                </button>
              )}
            </div>
          ) : (
            <div>
              <p className=" text-3xl">Сегодня тренировкa не запланирована</p>
              <Link
                to={'/calendar'}
                className=" block w-fit bg-base border border-gold px-4 py-2 rounded-lg mt-2"
              >
                Запланировать
              </Link>
            </div>
          )}
        </div>
      </div>
      <StartBtn />
      {isBegining && (
        <>
          <div ref={ref}>
            {todayTraining?.training.map((el) => {
              return (
                <TrainingBox
                  {...el}
                  key={el.exercise}
                  title={el.exercise}
                  todayTraining={todayTraining.training}
                />
              )
            })}
          </div>
          <AddTrainingBtn trainingList={trainingList} />
        </>
      )}
    </section>
  )
}

export default TrainingPage
