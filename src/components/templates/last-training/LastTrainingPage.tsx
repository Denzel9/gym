import { FunctionComponent, useContext } from 'react'
import { TODAY } from '../../../helpers/getDate'
import { UserProviderContext } from '../../../providers/UserProvider'
import LastTrainingItem from './LastTrainingItem'
import { Link } from 'react-router-dom'

import { MdArrowBackIos } from 'react-icons/md'

const LastTrainingPage: FunctionComponent = () => {
  const { calendar } = useContext(UserProviderContext)
  const lastTraining = calendar?.find((el) => el.training.length && el.date < TODAY)
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
