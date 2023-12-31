import { FunctionComponent, useContext, useEffect, useRef } from 'react'
import { TODAY, getMonth } from '../../../helpers/getDate'
import StartBtn from './StartBtn'
import { MdArrowForwardIos } from 'react-icons/md'
import TrainingBox from './training-box/TrainingBox'
import { useAppSelector } from '../../../hooks/useAppSelector'
import AddTrainingBtn from './AddTrainingBtn'
import classNames from 'classnames'
import { UserProviderContext } from '../../../providers/UserProvider'
import { trainingType } from '../../../data/initTraning'

const TrainingPage: FunctionComponent = () => {
  const date = `${new Date().getDate()} ${getMonth(new Date().getUTCMonth())}`
  const { calendar } = useContext(UserProviderContext)
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

  const todayTraining = calendar?.find((el) => {
    const dayDate = el.date.split('.')
    const todayDate = TODAY.split('.')
    if (
      el.training.length &&
      dayDate[0] === todayDate[0] &&
      dayDate[1] === todayDate[1] &&
      dayDate[2] === todayDate[2]
    ) {
      return el
    }
    return null
  })
  const type = Object.entries(trainingType).find((el) => el[0] === todayTraining?.type)

  return (
    <section>
      <div className={classNames(isBegining ? ' h-screen' : ' h-5/6')}>
        <h1 className=" text-5xl">Сегодня:</h1>
        <p className=" text-3xl">{date}</p>
        <div className=" mt-24 ">
          <h2>Тип тренировки:</h2>
          <p className=" text-2xl">{type && type[1]}</p>
          {isBegining && (
            <button
              onClick={handleScroll}
              className=" bg-base px-4 py-2 mt-2 rounded-xl flex items-center gap-2 border border-gold"
            >
              <span>К упражнениям</span> <MdArrowForwardIos className=" mt-1 text-lg" />
            </button>
          )}
        </div>
      </div>
      <StartBtn />
      {isBegining && (
        <>
          <div ref={ref}>
            {trainingList.map((el) => {
              return <TrainingBox key={el} title={el} trainingList={trainingList} />
            })}
          </div>
          <AddTrainingBtn trainingList={trainingList} />
        </>
      )}
    </section>
  )
}

export default TrainingPage
