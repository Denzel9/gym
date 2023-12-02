import { FunctionComponent, useState } from 'react'
import {
  useDeleteTrainingDay,
  useUpdateCalendar,
} from '../../../../../hooks/query-hooks/useUpdateCalendar'
import { TrainingDayInterface } from '../../../../../types/user.interface'
import TrainingPlaningField from './TrainingPlaningField'

import TrainingPlanField from './TrainingPlanField'
import TrainingHeader from './TrainingHeader'

interface CalendarListItemProps {
  trainingType: string
  setTrainingType(trainingType: string): void
  date: string
  calendar: TrainingDayInterface[]
  id: string
}

const CalendarListItem: FunctionComponent<CalendarListItemProps> = ({
  trainingType,
  setTrainingType,
  date,
  calendar,
  id,
}) => {
  const [isTrainingPlan, setIsTrainingPlan] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const { mutateCalendar, trainingDay } = useUpdateCalendar(calendar, id, date)
  const { deleteTraining } = useDeleteTrainingDay(calendar, id, date)

  const isTraining = trainingDay?.training?.length

  const handleClose = () => {
    setIsOpen(!isOpen)
    setIsTrainingPlan(false)
  }
  const handleUpdateCalendar = () => {
    mutateCalendar()
    setIsTrainingPlan(false)
  }

  const handleDeleteTrainingDay = () => {
    deleteTraining()
    setIsTrainingPlan(false)
  }
  return (
    <li onClick={handleClose} className=" w-full rounded-lg mt-3">
      <TrainingHeader isTraining={isTraining!} isOpen={isOpen} date={date} />

      {isOpen && (
        <div onClick={(e) => e.stopPropagation()} className=" bg-gold p-2 rounded-lg pt-14 -mt-12">
          {!isTrainingPlan &&
            (isTraining ? (
              <button className=" text-xl" onClick={() => setIsTrainingPlan(true)}>
                О тренировке
              </button>
            ) : (
              <button className=" text-xl" onClick={() => setIsTrainingPlan(true)}>
                Добавить тренировку
              </button>
            ))}
          {isTrainingPlan && !isTraining && (
            <TrainingPlaningField
              trainingType={trainingType}
              setTrainingType={setTrainingType}
              setIsOpen={setIsOpen}
              handleUpdateCalendar={handleUpdateCalendar}
            />
          )}
          {isTrainingPlan && isTraining ? (
            <TrainingPlanField
              setIsOpen={setIsOpen}
              trainingDay={trainingDay}
              handleDeleteTrainingDay={handleDeleteTrainingDay}
            />
          ) : null}
        </div>
      )}
    </li>
  )
}

export default CalendarListItem
