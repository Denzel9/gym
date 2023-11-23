import classNames from 'classnames'
import { FunctionComponent } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { setIsBegining } from '../../../redux/reducer'

const StartBtn: FunctionComponent<{ setModal(modal: boolean): void }> = ({ setModal }) => {
  const dispatch = useAppDispatch()
  const isBegining = useAppSelector((state) => state.isBegining)
  return (
    <button
      onClick={() => (isBegining ? setModal(true) : dispatch(setIsBegining()))}
      className={classNames(
        !isBegining ? 'bg-green-800' : 'bg-red-800',
        ' h-20 w-20 rounded-full absolute bottom-32 right-5'
      )}
    >
      {!isBegining ? 'Старт' : 'Стоп'}
    </button>
  )
}

export default StartBtn
