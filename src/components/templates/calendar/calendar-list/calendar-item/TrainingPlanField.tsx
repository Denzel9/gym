import { FunctionComponent } from 'react'
import { TrainingDayInterface } from '../../../../../types/user.interface'

const TrainingPlanField: FunctionComponent<{
  setIsOpen(trainingPlan: boolean): void
  trainingDay: TrainingDayInterface
  handleDeleteTrainingDay(): void
}> = ({ setIsOpen, trainingDay, handleDeleteTrainingDay }) => {
  return (
    <>
      <p className=" text-xl">Упражнения сегодня:</p>

      {trainingDay?.training?.map((el) => {
        return <p key={el.exercise}>{el.exercise}</p>
      })}

      <div className=" flex justify-between mt-2">
        <button onClick={handleDeleteTrainingDay}>Отменить тренировку</button>
        <button onClick={() => setIsOpen(false)}>Закрыть</button>
      </div>
    </>
  )
}

export default TrainingPlanField
