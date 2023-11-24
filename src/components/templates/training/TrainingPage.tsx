import { FunctionComponent, useRef } from 'react'
import { getMonth } from '../../../helpers/getMonth'
import StartBtn from './StartBtn'

import { MdArrowForwardIos } from 'react-icons/md'
import TrainingBox from './training-box/TrainingBox'
// import { useAppDispatch } from '../../../hooks/useAppDispatch'
// import { createExercise } from '../../../redux/currentTraining'

const TrainingPage: FunctionComponent = () => {
  const date = `${new Date().getDate()}  ${getMonth(new Date().getUTCMonth())}`
  // const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement | null>(null)
  return (
    <section className=" ">
      <h1 className=" text-5xl">Сегодня</h1>
      <p className=" text-3xl">{date}</p>
      <div className=" mt-24 ">
        <p className=" text-2xl">Тренировка груди, плеч, бицепса и трицепса</p>
        <button
          onClick={() =>
            ref?.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center',
            })
          }
          className=" bg-base px-4 py-2 rounded-xl flex items-center gap-2"
        >
          <span>К упражнениям</span> <MdArrowForwardIos className=" mt-1 text-lg" />
        </button>
      </div>
      {/* <button
        onClick={() => {
          dispatch(createExercise('Бицепс'))
        }}
      >
        Начать
      </button> */}
      <StartBtn />
      <div ref={ref} className=" my-[500px] ">
        <TrainingBox title="Бицепс" />
        <TrainingBox title="Бицепс" />
        <TrainingBox title="Бицепс" />
      </div>
    </section>
  )
}

export default TrainingPage
