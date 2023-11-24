import { FunctionComponent, useState } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { addExercise } from '../../../redux/currentTraining'
import Modal from '../../ui/Modal'

const AddTrainingBtn: FunctionComponent<{ trainingList: string[] }> = ({ trainingList }) => {
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState(false)
  const [text, setText] = useState('')

  const handleClick = () => {
    if (!trainingList.includes(text)) {
      dispatch(addExercise(text))
      setModal(false)
    } else console.log('err')
  }
  return (
    <>
      <button
        className=" mb-[500px] mt-5 py-2 px-4 bg-base shadow-xl border border-gold rounded-xl"
        onClick={() => setModal(true)}
      >
        Добавить упражнение
      </button>
      <Modal
        title={'Добавить упражнение'}
        modal={modal}
        setModal={setModal}
        isConfirmation={true}
        yesBtnFn={handleClick}
        yesBtn="Добавить"
        noBtn="Отменить"
      >
        <input
          className=" text-black"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Modal>
    </>
  )
}

export default AddTrainingBtn
