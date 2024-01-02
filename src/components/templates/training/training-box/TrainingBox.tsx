import { FunctionComponent, useState } from 'react'
import BoxItem from './BoxItem'

import { MdLinearScale } from 'react-icons/md'
import EditBlock from './EditBlock'
import classNames from 'classnames'
import { DayTraining, SetsExercise } from '../../../../types/calendar.interface'

const TrainingBox: FunctionComponent<{
  title: string
  todayTraining: DayTraining[]
  exercise: string
  sets: SetsExercise[]
}> = ({ title, todayTraining, sets }) => {
  const [start, setStart] = useState(false)
  const [edit, setEdit] = useState(false)

  const exercisesSteps = todayTraining.map((el) => el.exercise)

  const steps = exercisesSteps && Object.keys(exercisesSteps!).map((el) => String(+el + 1))

  const isAvailableBox = (step: number) => steps?.find((el) => +el === step)

  const currentStep = steps.length

  const weights = sets.reduce((acc, cur) => (acc += cur.weight * cur.repeat), 0)

  const repeats = sets.reduce((acc, cur) => (acc += cur.repeat), 0)

  console.log(sets)
  const progressBar = () => {
    if (sets?.length === 1) return 'w-1/5'
    if (sets?.length === 2) return ' w-2/5'
    if (sets?.length === 3) return ' w-3/5'
    if (sets?.length === 4) return ' w-4/5'
    if (sets?.length === 5) return ' w-full'
  }
  return (
    <div
      className={classNames(
        start ? ' h-66' : ' h-20',
        'duration-500 w-full p-2 bg-white bg-opacity-40 rounded-xl mt-10 relative py-4'
      )}
      onClick={() => !start && setStart(true)}
    >
      <h2 className=" text-2xl border-b pb-2 mb-2 border-gold z-10 relative">{title}</h2>
      {start && (
        <div className=" flex gap-5">
          <div>
            <p>Вес</p>
            <p>{weights} кг.</p>
          </div>
          <div>
            <p>Повторы</p>
            <p>{repeats} раз</p>
          </div>
          <div>
            <p>Подходы</p>
            <p>{sets.length}</p>
          </div>
        </div>
      )}

      <div className=" h-2 mt-2 w-full bg-base rounded-full relative">
        <div
          className={classNames(progressBar(), 'absolute left-0 top-0 bg-gold h-2 rounded-full')}
        ></div>
      </div>

      <div className={classNames(edit ? ' opacity-0 duration-300' : ' opacity-100 duration-300')}>
        {start && <p className=" py-2">Подходы:</p>}
        <div className={classNames(start ? ' opacity-100 duration-700' : ' opacity-0 ')}>
          <div className=" bg-base h-10 mb-10 grid grid-cols-5 rounded-xl overflow-hidden">
            <BoxItem
              step={1}
              disabled={false}
              currentStep={currentStep!}
              title={title}
              steps={sets.length!}
            />
            <BoxItem
              step={2}
              disabled={!isAvailableBox(1)!}
              currentStep={currentStep!}
              title={title}
              steps={sets.length!}
            />
            <BoxItem
              step={3}
              disabled={!isAvailableBox(2)!}
              currentStep={currentStep!}
              title={title}
              steps={sets.length!}
            />
            <BoxItem
              step={4}
              disabled={!isAvailableBox(3)!}
              currentStep={currentStep!}
              title={title}
              steps={sets.length!}
            />
            <BoxItem
              step={5}
              disabled={!isAvailableBox(4)!}
              currentStep={currentStep!}
              title={title}
              steps={sets.length!}
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

      {edit && <EditBlock title={title} steps={[]} />}

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
