import { FunctionComponent, useState } from 'react'
import BoxItem from './BoxItem'
import { useAppSelector } from '../../../../hooks/useAppSelector'

import { MdLinearScale } from 'react-icons/md'
import EditBlock from './EditBlock'

const TrainingBox: FunctionComponent<{ title: string; trainingList: string[] }> = ({
  title,
  trainingList,
}) => {
  const [start, setStart] = useState(false)
  const [edit, setEdit] = useState(false)

  const exercises = useAppSelector((state) => state.currentTraining.exercises)

  const exercisesSteps = Object.entries(exercises)?.find((el) => el[0] === title)?.[1]

  const steps = exercisesSteps && Object.keys(exercisesSteps!)

  const isAvailableBox = (step: number) => steps?.find((el) => +el === step)

  const currentStep = steps?.slice(-1).join('')

  return (
    <div
      className=" w-full p-2 bg-gold rounded-xl mt-10 relative py-4"
      onClick={() => !start && setStart(true)}
    >
      <div className=" flex items-center justify-between">
        <h2 className=" text-2xl">{title}</h2>
        {start && (
          <button className=" text-3xl mt-2 z-20" onClick={() => setEdit(!edit)}>
            <MdLinearScale />
          </button>
        )}
      </div>
      {start && <p className=" pb-2">Подходы:</p>}
      {start && (
        <div>
          <div className=" bg-base h-10 mb-10 grid grid-cols-5 rounded-xl overflow-hidden">
            <BoxItem
              step={1}
              disabled={false}
              currentStep={currentStep!}
              title={title}
              steps={steps!}
            />
            <BoxItem
              step={2}
              disabled={!isAvailableBox(1)!}
              currentStep={currentStep!}
              title={title}
              steps={steps!}
            />
            <BoxItem
              step={3}
              disabled={!isAvailableBox(2)!}
              currentStep={currentStep!}
              title={title}
              steps={steps!}
            />
            <BoxItem
              step={4}
              disabled={!isAvailableBox(3)!}
              currentStep={currentStep!}
              title={title}
              steps={steps!}
            />
            <BoxItem
              step={5}
              disabled={!isAvailableBox(4)!}
              currentStep={currentStep!}
              title={title}
              steps={steps!}
            />
          </div>
          <button
            onClick={() => setStart(false)}
            className=" float-right -mt-6 -mr-2 bg-base py-2 px-4 rounded-br-xl"
          >
            Закрыть
          </button>
        </div>
      )}
      {edit && <EditBlock title={title} steps={trainingList!} />}
    </div>
  )
}

export default TrainingBox
