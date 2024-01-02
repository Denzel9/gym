import { FunctionComponent, useContext } from 'react'
import LastTrainingItem from './LastTrainingItem'
import { Link } from 'react-router-dom'

import { MdArrowBackIos } from 'react-icons/md'
import { CalendarProviderContext } from '../../../providers/CalendarProvider'

const LastTrainingPage: FunctionComponent = () => {
  const { todayTraining } = useContext(CalendarProviderContext)
  const lastTraining = todayTraining

  return (
    <div className=" pb-24">
      <Link to={'/profile'} className=" flex items-center">
        <MdArrowBackIos className=" text-3xl" />
        Назад
      </Link>
      {lastTraining?.training.map((el) => {
        return <LastTrainingItem key={el.exercise} {...el} />
      })}
    </div>
  )
}

export default LastTrainingPage
