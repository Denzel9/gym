import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import Modal from '../../../ui/Modal'
import { saveExercise } from '../../../../redux/currentTraining'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import ModalChildren from './modalChildren/ModalChildren'

const BoxItem: FunctionComponent<{
  step: number
  disabled: boolean
  currentStep: number
  title: string
  steps: number
}> = ({ step, disabled, currentStep, title, steps }) => {
  const [modal, setModal] = useState(false)
  const [weight, setWeight] = useState(0)
  const [repeat, setRepeat] = useState(0)

  const dispatch = useAppDispatch()

  const handleclick = () => {
    setModal(false)
    dispatch(saveExercise({ repeat, weight, title, step }))
  }

  const completeStep = steps >= step

  return (
    <>
      <div
        onClick={(e) => (+e.currentTarget.textContent! === step ? setModal(true) : () => {})}
        className={classNames(
          +completeStep && 'bg-green-800',
          !disabled ? ' bg-base pointer-events-auto ' : 'bg-lightGray',
          +currentStep === step && 'animate-pulse',
          ' p-1 flex items-center justify-center pointer-events-none '
        )}
      >
        {step}
      </div>
      <Modal
        modal={modal}
        setModal={setModal}
        isConfirmation={true}
        title={`Подход ${step}`}
        yesBtnFn={handleclick}
        yesBtn="Сохранить"
        noBtn="Отменить"
      >
        <ModalChildren
          repeat={weight}
          setRepeat={setWeight}
          weight={repeat}
          setWeight={setRepeat}
        />
      </Modal>
    </>
  )
}

export default BoxItem
