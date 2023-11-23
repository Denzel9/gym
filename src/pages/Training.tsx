import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { reset, setIsBegining } from '../redux/reducer'
import { useAppSelector } from '../hooks/useAppSelector'
import { getMonth } from '../helpers/getMonth'

const Training: FunctionComponent = () => {
  const [modal, setModal] = useState(false)
  const dispatch = useAppDispatch()
  const isBegining = useAppSelector((state) => state.isBegining)
  const date = `${new Date().getDate()}  ${getMonth(new Date().getUTCMonth())}`
  const handleStop = () => {
    dispatch(setIsBegining())
    setModal(false)
    dispatch(reset())
  }

  return (
    <section>
      <h1 className=" text-5xl">Сегодня</h1>
      <p className=" text-3xl">{date}</p>
      <p>Тренировка груди, плечь, бицепса и трицепса</p>
      <button
        onClick={() => (isBegining ? setModal(true) : dispatch(setIsBegining()))}
        className={classNames(
          !isBegining ? 'bg-green-800' : 'bg-red-800',
          ' h-20 w-20 rounded-full absolute bottom-32 right-5'
        )}
      >
        {!isBegining ? 'Старт' : 'Стоп'}
      </button>

      <div
        className={classNames(
          modal ? 'bg-black bg-opacity-40' : 'bg-opacity-0 pointer-events-none ',
          ' absolute h-full w-full top-0 left-0 flex items-center '
        )}
        onClick={() => setModal(false)}
      >
        <div
          className={classNames(
            modal ? ' translate-y-0' : ' translate-y-56',
            'duration-500 fixed bottom-0 left-0 right-0 z-10 bg-black px-5 py-10 '
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <p className=" text-xl">Вы уверены что хотите закончить тренировку?</p>
          <div className=" float-right flex gap-2">
            <button onClick={handleStop} className=" bg-green-800 px-4 py-2 rounded-xl">
              Да
            </button>
            <button onClick={() => setModal(false)} className=" bg-red-800 px-4 py-2 rounded-xl">
              Нет
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Training
