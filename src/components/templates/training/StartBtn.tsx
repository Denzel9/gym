import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { setIsBegining } from '../../../redux/reducer'
import Modal from '../../ui/Modal'
import { useGetExercises } from '../../../hooks/useGetExercises'
import { startTraining, stopTraining } from '../../../redux/currentTraining'

const StartBtn: FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const isBegining = useAppSelector((state) => state.timer.isBegining)
  const isTraining = useAppSelector((state) => state.currentTraining.isTraining)
  const [modal, setModal] = useState(false)
  const { steps } = useGetExercises()

  const handleStop = () => {
    dispatch(setIsBegining())
    !steps.flat(2).length && dispatch(stopTraining())
    !steps.flat(2).length && dispatch(startTraining())
    setModal(false)
  }

  const handleStart = () => {
    dispatch(setIsBegining())
    dispatch(startTraining())
    setModal(false)
  }

  return (
    <>
      <button
        onClick={() =>
          isTraining ? (steps.flat(2).length ? setModal(true) : handleStop()) : handleStart()
        }
        className={classNames(
          !isBegining ? 'bg-green-800' : 'bg-red-800',
          ' h-20 w-20 rounded-full absolute bottom-32 right-5'
        )}
      >
        {!isBegining ? 'Старт' : 'Стоп'}
      </button>
      {steps.flat(2).length ? (
        <Modal
          title="Вы уверены что хотите закончить тренировку?"
          modal={modal}
          setModal={setModal}
          isConfirmation
          yesBtn="Да"
          noBtn="Нет"
          link="/reportTraining"
          yesBtnFn={handleStop}
        />
      ) : null}
    </>
  )
}

export default StartBtn
