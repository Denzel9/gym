import { FunctionComponent, useState } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { addExercise } from '../../../redux/currentTraining'
import Modal from '../../ui/Modal'

const AddTrainingBtn: FunctionComponent<{ trainingList: string[] }> = ({ trainingList }) => {
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState(false)
  const [text, setText] = useState('')

  const toLowerList = trainingList.map((el) => el.toLowerCase())

  const handleClick = () => {
    if (!toLowerList.includes(text.toLowerCase())) {
      dispatch(addExercise(text))
      setModal(false)
    } else console.log('eer')
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
        title={'Новое упражнение'}
        modal={modal}
        setModal={setModal}
        isConfirmation={true}
        yesBtnFn={handleClick}
        yesBtn="Добавить"
        noBtn="Отменить"
      >
        <input
          className="w-full bg-transparent border-b border-gold outline-none my-5"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Что делаем?"
        />
      </Modal>
    </>
  )
}

export default AddTrainingBtn
