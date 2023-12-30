import classNames from 'classnames'
import { FunctionComponent, ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/useAppSelector'

const MenuItem: FunctionComponent<{
  link: string
  icon: ReactNode
  setModal(modal: boolean): void
}> = ({ link, icon, setModal }) => {
  const { pathname } = useLocation()
  const IsSaveTraining = useAppSelector((state) => state.currentTraining.isTraining)

  return (
    <div
      className={classNames(
        pathname === link && ' border-t-4 border-yellow-500 ',
        'h-full w-1/4 text-2xl flex justify-center items-center cursor-pointer'
      )}
    >
      {IsSaveTraining && pathname === '/reportTraining' ? (
        <button onClick={() => setModal(true)}>{icon}</button>
      ) : (
        <Link to={link}>{icon}</Link>
      )}
    </div>
  )
}

export default MenuItem
