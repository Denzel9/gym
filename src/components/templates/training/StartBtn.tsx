import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { reset, setIsBegining } from '../../../redux/reducer'
import Modal from '../../ui/Modal'

const StartBtn: FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const isBegining = useAppSelector((state) => state.timer.isBegining)
  const [modal, setModal] = useState(false)

  const handleStop = () => {
    dispatch(setIsBegining())
    setModal(false)
    dispatch(reset())
  }
  return (
    <>
      <button
        onClick={() => (isBegining ? setModal(true) : dispatch(setIsBegining()))}
        className={classNames(
          !isBegining ? 'bg-green-800' : 'bg-red-800',
          ' h-20 w-20 rounded-full absolute bottom-32 right-5'
        )}
      >
        {!isBegining ? 'Старт' : 'Стоп'}
      </button>
      <Modal
        title="Вы уверены что хотите закончить тренировку?"
        modal={modal}
        setModal={setModal}
        isConfirmation
        yesBtn="Да"
        noBtn="Нет"
        yesBtnFn={handleStop}
      />
    </>
  )
}

export default StartBtn
