import { FunctionComponent } from 'react'
import { SetsExercise } from '../../../types/user.interface'

const LastTrainingItem: FunctionComponent<{ exercise: string; sets: SetsExercise[] }> = ({
  exercise,
  sets,
}) => {
  const weightReduce = sets.reduce((acc, cur) => (acc += cur.weight * cur.repeat), 0)
  const repeatReduce = sets.reduce((acc, cur) => (acc += cur.repeat), 0)
  return (
    <div className=" bg-base rounded-lg mt-3 p-2">
      <h2 className=" text-xl border-b border-gold pb-2">{exercise}</h2>
      {sets?.map((el, i) => {
        return (
          <div key={Math.random()} className=" pt-2">
            Подход {++i}: {el.repeat} раз на {el.weight} кг.
          </div>
        )
      })}
      <div className=" mt-2">
        <p>Всего повторений: {repeatReduce} раз</p>
        <p>Общий вес за упражнение: {weightReduce} кг.</p>
      </div>
    </div>
  )
}

export default LastTrainingItem
