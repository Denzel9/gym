import { FunctionComponent, useState } from 'react'
import BoxItem from './BoxItem'
import { useAppSelector } from '../../../../hooks/useAppSelector'

import { MdLinearScale } from 'react-icons/md'
import EditBlock from './EditBlock'
import classNames from 'classnames'

const TrainingBox: FunctionComponent<{ title: string; trainingList: string[] }> = ({
  title,
  trainingList,
}) => {
  const [start, setStart] = useState(false)
  const [edit, setEdit] = useState(false)

  const exercises = useAppSelector((state) => state.currentTraining.exercises)

  const exercisesSteps = Object.entries(exercises)?.find((el) => el[0] === title)?.[1]

  const steps = exercisesSteps && Object.keys(exercisesSteps!).map((el) => String(+el + 1))

  const isAvailableBox = (step: number) => steps?.find((el) => +el === step)

  const currentStep = steps?.slice(-1).join('')

  const weights = exercisesSteps?.reduce((acc, cur) => (acc += cur.weight * cur.repeat), 0)

  const repeats = exercisesSteps?.reduce((acc, cur) => (acc += cur.repeat), 0)

  const sets = exercisesSteps?.length

  const progressBar = () => {
    if (steps?.length === 1) return 'w-1/5'
    if (steps?.length === 2) return ' w-2/5'
    if (steps?.length === 3) return ' w-3/5'
    if (steps?.length === 4) return ' w-4/5'
    if (steps?.length === 5) return ' w-full'
  }
  return (
    <div
      className={classNames(
        start ? ' h-60' : ' h-32',
        'duration-500 w-full p-2 bg-white bg-opacity-40 rounded-xl mt-10 relative py-4'
      )}
      onClick={() => !start && setStart(true)}
    >
      <h2 className=" text-2xl">{title}</h2>

      <div className=" flex gap-5">
        <div>
          <p>weights</p>
          <p>{weights}</p>
        </div>
        <div>
          <p>repeats</p>
          <p>{repeats}</p>
        </div>
        <div>
          <p>sets</p>
          <p>{sets}</p>
        </div>
      </div>

      <div className=" h-2 mt-2 w-full bg-base rounded-full relative">
        <div
          className={classNames(progressBar(), 'absolute left-0 top-0 bg-gold h-2 rounded-full')}
        ></div>
      </div>

      <div className={classNames(edit ? ' opacity-0 duration-300' : ' opacity-100 duration-300')}>
        {start && <p className=" pb-2">Подходы:</p>}
        <div className={classNames(start ? ' opacity-100 duration-700' : ' opacity-0 ')}>
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
            className="  absolute right-0 bottom-0 bg-base py-2 px-4 rounded-br-xl"
          >
            Закрыть
          </button>
        </div>
      </div>

      {edit && <EditBlock title={title} steps={trainingList!} />}

      {start && (
        <button
          className=" text-3xl mt-2 z-20 absolute right-2 top-2"
          onClick={() => setEdit(!edit)}
        >
          <MdLinearScale />
        </button>
      )}
    </div>
  )
}

export default TrainingBox
