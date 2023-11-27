import { FunctionComponent } from 'react'
import { MdDelete, MdReplay } from 'react-icons/md'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { addExercise, deleteExercise } from '../../../../redux/currentTraining'

const EditBlock: FunctionComponent<{ title: string; steps: string[] }> = ({ title, steps }) => {
  const dispatch = useAppDispatch()
  const filterExircise = steps.map((el) =>
    el
      .split('')
      .filter((el) => !+el && el !== ' ')
      .join('')
  )
  let currentExercise = filterExircise.filter((el) => el === title).length

  return (
    <div className=" absolute top-10 left-0 rounded-xl border border-gold p-2">
      <button
        className="  mt-6 flex items-center gap-2"
        onClick={() => {
          dispatch(addExercise(`${title} ${currentExercise + 1}`))
        }}
      >
        <MdReplay className=" text-2xl" />
        Повторить
      </button>
      <button
        className="  flex items-center gap-2 mt-2"
        onClick={() => dispatch(deleteExercise(title))}
      >
        <MdDelete className=" text-2xl" />
        Удалить
      </button>
    </div>
  )
}

export default EditBlock
