import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import Modal from '../../../ui/Modal'
import { saveExercise } from '../../../../redux/currentTraining'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'

const BoxItem: FunctionComponent<{ step: number; disabled: boolean; currentStep: string }> = ({
  step,
  disabled,
  currentStep,
}) => {
  const [modal, setModal] = useState(false)
  const [weight, setWeight] = useState(0)
  const [done, setDone] = useState(false)

  const dispatch = useAppDispatch()

  const handleclick = () => {
    setDone(!done)
    setModal(false)
    dispatch(saveExercise({ repeat: 12, weight, field: 'Бицепс', step }))
  }
  return (
    <>
      <div
        onClick={(e) => (+e.currentTarget.textContent! === step ? setModal(true) : () => {})}
        className={classNames(
          done && 'bg-green-800',
          !disabled ? ' bg-base pointer-events-auto ' : 'bg-lightGray',
          +currentStep + 1 === step && 'animate-pulse',
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
        <div className=" bg-base h-10 grid grid-cols-6 rounded-xl overflow-hidden">
          <button
            className={classNames(
              weight === 10 ? ' bg-green-800' : ' bg-base',
              ' p-1 flex items-center justify-center'
            )}
            value={weight}
            onClick={() => setWeight(10)}
          >
            10
          </button>
          <button
            className={classNames(
              weight === 12 ? ' bg-green-800' : ' bg-base',
              ' p-1 flex items-center justify-center'
            )}
            value={weight}
            onClick={() => setWeight(12)}
          >
            12
          </button>
          <button
            className={classNames(
              weight === 14 ? ' bg-green-800' : ' bg-base',
              ' p-1 flex items-center justify-center'
            )}
            value={weight}
            onClick={() => setWeight(14)}
          >
            14
          </button>
          <button
            className={classNames(
              weight === 16 ? ' bg-green-800' : ' bg-base',
              ' p-1 flex items-center justify-center'
            )}
            value={weight}
            onClick={() => setWeight(16)}
          >
            16
          </button>
          <button
            className={classNames(
              weight === 18 ? ' bg-green-800' : ' bg-base',
              ' p-1 flex items-center justify-center'
            )}
            value={weight}
            onClick={() => setWeight(18)}
          >
            18
          </button>
          <button
            className={classNames(
              weight === 20 ? ' bg-green-800' : ' bg-base',
              ' p-1 flex items-center justify-center'
            )}
            value={weight}
            onClick={() => setWeight(20)}
          >
            20
          </button>
        </div>
      </Modal>
    </>
  )
}

export default BoxItem
