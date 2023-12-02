import { FunctionComponent, ReactNode, useEffect } from 'react'
import Nav from './nav/Nav'
import Logo from './Logo'
import Timer from '../Timer'
import { useAppSelector } from '../../hooks/useAppSelector'
import { initTraning } from '../../data/initTraning'
import { createExercise } from '../../redux/currentTraining'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useLocation } from 'react-router-dom'

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const isBegining = useAppSelector((state) => state.timer.isBegining)
  const isTraining = useAppSelector((state) => state.currentTraining.isTraining)
  const value = useAppSelector((state) => state.timer.timer)
  const { pathname } = useLocation()

  const trainingType = 'Тренировка груди, плеч, бицепса и трицепса'

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (trainingType === 'Тренировка груди, плеч, бицепса и трицепса' && isTraining) {
      dispatch(createExercise(initTraning))
    }
  }, [dispatch, trainingType, isTraining])

  return (
    <div className=" bg-training h-screen bg-cover bg-center">
      <div className=" flex items-center justify-between p-5">
        <Logo />
        {isBegining && <Timer isBegining={isBegining} time={value} />}
      </div>
      <div className="p-5">{children}</div>
      {pathname !== '/' && <Nav />}
    </div>
  )
}

export default Layout
