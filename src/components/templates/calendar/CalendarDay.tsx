import { FunctionComponent } from 'react'
import { TrainingDayInterface } from '../../../types/user.interface'

const CalendarDay: FunctionComponent<{
  dayTraining: TrainingDayInterface
  mutateCalendar(): void
}> = ({ dayTraining, mutateCalendar }) => {
  return (
    <div>
      {dayTraining?.training?.length ? <h2 className=" mt-5 text-xl">План на день</h2> : null}

      {!dayTraining?.training?.length && (
        <div className=" flex flex-col items-center">
          <p className=" text-2xl text-center mt-24">Сегодня тренировка не запланирована</p>
          <button
            onClick={() => mutateCalendar()}
            className=" bg-base px-4 py-2 rounded-lg border border-gold mt-3"
          >
            Запланировать
          </button>
        </div>
      )}

      {dayTraining?.training?.map((el) => {
        const repeats = el.sets.reduce((acc, cur) => (acc += cur.repeat), 0)
        const weight = el.sets.reduce((acc, cur) => (acc += cur.weight), 0)
        return (
          <div key={el.exercise} className=" bg-white bg-opacity-80 text-base  mt-3 p-2 rounded-lg">
            <h2 className=" text-xl">{el.exercise}</h2>
            <div className=" flex items-center gap-5">
              <div>
                <h3>Подходов</h3>
                <p>{el.sets.length}</p>
              </div>
              <div>
                <h3>Повторений</h3>
                <p>{repeats === 0 ? '-' : repeats}</p>
              </div>
              <div>
                <h3>Общий вес</h3>
                <p>{weight === 0 ? '-' : weight}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CalendarDay
