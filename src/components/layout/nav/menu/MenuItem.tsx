import classNames from 'classnames'
import { FunctionComponent, ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

const MenuItem: FunctionComponent<{ link: string; icon: ReactNode }> = ({ link, icon }) => {
  const { pathname } = useLocation()

  return (
    <Link
      to={link}
      className={classNames(
        pathname === link && ' border-t-4 border-yellow-500 ',
        'h-full w-1/4 text-2xl flex justify-center items-center cursor-pointer'
      )}
    >
      {icon}
    </Link>
  )
}

export default MenuItem
