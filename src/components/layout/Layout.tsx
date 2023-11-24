import { FunctionComponent, ReactNode } from 'react'
import Nav from './nav/Nav'
import Logo from './Logo'
import Timer from '../Timer'
import { useAppSelector } from '../../hooks/useAppSelector'

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const isBegining = useAppSelector((state) => state.timer.isBegining)
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
