import { FunctionComponent, useState } from 'react'
import BoxItem from './BoxItem'
import { useAppSelector } from '../../../../hooks/useAppSelector'

import { MdArrowForwardIos } from 'react-icons/md'

const TrainingBox: FunctionComponent<{ title: string }> = ({ title }) => {
  const [start, setStart] = useState(false)

  const exercises = useAppSelector((state) => state.currentTraining.exercises)

  const exercisesSteps = Object.entries(exercises)?.find((el) => el[0] === title)?.[1]

  const steps = exercisesSteps && Object.keys(exercisesSteps!)

  const isAvailableBox = (step: number) => steps?.find((el) => +el === step)

  const currentStep = steps?.slice(-1).join('')

  return (
    <div className=" w-full p-2 bg-gold rounded-xl mt-10">
      <div className=" flex items-center justify-between">
        <h2 className=" text-xl">{title}</h2>
        {start ? (
          <p className=" py-2">Подходы:</p>
        ) : (
          <button onClick={() => setStart(true)} className=" flex items-center gap-2">
            <span>Начать</span> <MdArrowForwardIos className=" text-xl mt-1" />
          </button>
        )}
      </div>
      {start && (
        <div>
          <div className=" bg-base h-10 grid grid-cols-5 rounded-xl overflow-hidden">
            <BoxItem step={1} disabled={false} currentStep={currentStep!} title={title} />
            <BoxItem
              step={2}
              disabled={!isAvailableBox(1)!}
              currentStep={currentStep!}
              title={title}
            />
            <BoxItem
              step={3}
              disabled={!isAvailableBox(2)!}
              currentStep={currentStep!}
              title={title}
            />
            <BoxItem
              step={4}
              disabled={!isAvailableBox(3)!}
              currentStep={currentStep!}
              title={title}
            />
            <BoxItem
              step={5}
              disabled={!isAvailableBox(4)!}
              currentStep={currentStep!}
              title={title}
            />
          </div>
          <p className="pt-2 text-xs mb-5">*oтметить кол-во выполненных</p>
          <button
            onClick={() => setStart(false)}
            className=" float-right -mt-8 -mr-2 bg-base py-2 px-4 rounded-br-xl"
          >
            Выполнено
          </button>
        </div>
      )}
    </div>
  )
}

export default TrainingBox
