import { FunctionComponent } from 'react'

const TrainingPlaningField: FunctionComponent<{
  trainingType: string
  setTrainingType(trainingType: string): void
  setIsOpen(trainingPlan: boolean): void
  handleUpdateCalendar(): void
}> = ({ trainingType, setTrainingType, setIsOpen, handleUpdateCalendar }) => {
  return (
    <>
      <div className=" flex gap-2 items-center">
        <p className=" w-2/3">Тип тренировки:</p>
        <select
          className=" text-black w-full"
          value={trainingType}
          onChange={(e) => setTrainingType(e.target.value)}
        >
          <option value="1">Верхнеплечевой</option>
          <option value="2">Спина</option>
          <option value="3">Кардио</option>
        </select>
      </div>
      <div className=" flex justify-between mt-2">
        <button onClick={() => setIsOpen(false)}>Отменить</button>
        <button onClick={handleUpdateCalendar}>Добавить</button>
      </div>
    </>
  )
}

export default TrainingPlaningField
