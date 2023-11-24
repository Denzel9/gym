import { FunctionComponent, ReactNode, useEffect } from 'react'
import Nav from './nav/Nav'
import Logo from './Logo'
import Timer from '../Timer'
import { useAppSelector } from '../../hooks/useAppSelector'
import { initTraning } from '../../data/initTraning'
import { createExercise } from '../../redux/currentTraining'
import { useAppDispatch } from '../../hooks/useAppDispatch'

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const isBegining = useAppSelector((state) => state.timer.isBegining)
  const training = 'Тренировка груди, плеч, бицепса и трицепса'
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (training === 'Тренировка груди, плеч, бицепса и трицепса') {
      dispatch(createExercise(initTraning))
    }
  }, [dispatch, training])
  return (
    <div className=" bg-training h-screen bg-cover bg-center">
      <div className=" flex items-center justify-between p-5">
        <Logo />
        {isBegining && <Timer isBegining={isBegining} />}
      </div>
      <div className="p-5">{children}</div>
      <Nav />
    </div>
  )
}

export default Layout
