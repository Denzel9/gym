import { FunctionComponent, useEffect, useRef } from 'react'
import { getMonth } from '../../../helpers/getMonth'
import StartBtn from './StartBtn'
import { MdArrowForwardIos } from 'react-icons/md'
import TrainingBox from './training-box/TrainingBox'
import { useAppSelector } from '../../../hooks/useAppSelector'
import AddTrainingBtn from './AddTrainingBtn'

const TrainingPage: FunctionComponent = () => {
  const date = `${new Date().getDate()}  ${getMonth(new Date().getUTCMonth())}`

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section>
      <div className=" h-screen">
        <h1 className=" text-5xl">Сегодня</h1>
        <p className=" text-3xl">{date}</p>
        <div className=" mt-24 ">
          <p className=" text-2xl">Тренировка груди, плеч, бицепса и трицепса</p>
          {isBegining && (
            <button
              onClick={handleScroll}
              className=" bg-base px-4 py-2 rounded-xl flex items-center gap-2"
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
