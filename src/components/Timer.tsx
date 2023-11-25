import { FunctionComponent } from 'react'

import { useEffect } from 'react'
import { getPadTime } from '../helpers/getPadTime'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { incremented } from '../redux/reducer'

const Timer: FunctionComponent<{ isBegining: boolean; time: number }> = ({ isBegining, time }) => {
  const dispatch = useAppDispatch()

  const hours = getPadTime(Math.floor(time / 60 / 60))
  const minutes = getPadTime(Math.floor(time / 60) % 60)
  const seconds = getPadTime(time % 60)

  useEffect(() => {
    const interval = setInterval(() => {
      isBegining && dispatch(incremented())
    }, 1000)
    return () => clearInterval(interval)
  }, [dispatch, isBegining])

  return (
    <span>
      {hours}:{minutes}:{seconds}
    </span>
  )
}

export default Timer
