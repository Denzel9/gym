import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { initExerciseType } from '../../../data/initTraning'
import { TrainingDayInterface } from '../../../types/user.interface'
import { currentMonth, currentYear } from '../../../helpers/getDate'
import { useAddTrainingDay } from '../../../hooks/query-hooks/useUpdateCalendar'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { addExercise, clearTraining, deleteExercise } from '../../../redux/initTraining'

const CalendarPlaningDay: FunctionComponent<{
  setPlan(plan: boolean): void
  plan: boolean
  date: string
  setTrainingType(type: string): void
  trainingType: string
  id: string
  calendar: TrainingDayInterface[]
  dayfilter: string
}> = ({ setPlan, plan, date, setTrainingType, trainingType, calendar, id, dayfilter }) => {
  const dispatch = useAppDispatch()
  const [exerciseName, setExerciseName] = useState('')
  const exerciseLists = useAppSelector((state) => state.initTraining.trainingList)
  const exerciseList = exerciseLists.find((el) => el.type === trainingType)

  const newExercise = exerciseList?.exercise.map((el) => ({
    exercise: el,
    sets: [],
  }))

  const { mutateCalendar } = useAddTrainingDay(
    `${dayfilter}.${currentMonth + 1}.${currentYear}`,
    newExercise!
  )

  const handleAddExercise = () => {
    const uniqueExercise = exerciseList?.exercise.find((el) => el === exerciseName)
    if (!uniqueExercise && exerciseName.length)
      dispatch(addExercise({ type: trainingType, exercise: exerciseName }))
    setExerciseName('')
  }

  const handleSetTrainindDay = () => {
    mutateCalendar()
      .then(() => dispatch(clearTraining()))
      .then(() => setPlan(false))
  }

  return (
    <div
      className={classNames(
        plan ? 'bg-black bg-opacity-40' : 'bg-opacity-0 pointer-events-none ',
        ' z-10 fixed bg-base right-0 top-0 w-full h-full'
      )}
      onClick={() => setPlan(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          plan && 'translate-x-0 ',
          'duration-300 w-4/5 h-full bg-base float-right translate-x-96 p-2 relative'
        )}
      >
        <button onClick={() => setPlan(false)}>
          <MdClose className=" text-3xl" />
        </button>
        <h2 className=" text-xl">План тренировки на: {date}</h2>
        <p className=" mt-5">Тип тренировки:</p>
        <select
          className=" w-full rounded-lg text-black py-1 mt-1"
          value={trainingType}
          name="sasa"
          placeholder="Выберите тип тренировки"
          onChange={(e) => setTrainingType(e.target.value)}
        >
          {initExerciseType.map((el) => {
            return (
              <option disabled={el.disabled} key={el.type} value={el.type}>
                {el.type}
              </option>
            )
          })}
        </select>

        <div className=" mt-5">
          {exerciseList?.exercise.map((el, i) => {
            return (
              <div key={el} className=" flex justify-between">
                <p>
                  <span className=" text-gold text-lg">{i + 1}.</span> {el}
                </p>
                <button
                  onClick={() =>
                    dispatch(deleteExercise({ type: trainingType, exercise: exerciseName }))
                  }
                >
                  <MdClose />
                </button>
              </div>
            )
          })}
        </div>

        <input
          placeholder="Упражнение"
          type="text"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
          className=" text-black p-1 rounded-lg w-full mt-5"
        />
        <button
          className=" border border-gold px-4 py-2 rounded-lg  mt-2 shadow shadow-black"
          onClick={handleAddExercise}
        >
          Добавить
        </button>

        <button
          onClick={handleSetTrainindDay}
          className=" absolute right-2 bottom-10 border-b border-gold pb-2"
        >
          Cохранить
        </button>
      </div>
    </div>
  )
}

export default CalendarPlaningDay
