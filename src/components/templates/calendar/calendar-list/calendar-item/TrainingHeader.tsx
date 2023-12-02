import { FunctionComponent } from 'react'
import { MdOutlineStar, MdOutlineStarBorderPurple500 } from 'react-icons/md'
import { MdKeyboardArrowDown, MdKeyboardControlKey } from 'react-icons/md'
import { getCurrentDay } from '../../../../../helpers/getDate'

const TrainingHeader: FunctionComponent<{
  isTraining: number
  isOpen: boolean
  date: string
}> = ({ isOpen, isTraining, date }) => {
  return (
    <div className="flex h-12 items-center justify-between p-2 rounded-lg bg-base relative">
      <div className=" flex items-center gap-3">
        <p className=" text-xl">{getCurrentDay(date)}</p>
        {isTraining ? (
          <MdOutlineStar className=" text-gold text-xl" />
        ) : (
          <MdOutlineStarBorderPurple500 className="  text-white text-xl" />
        )}
      </div>
      {isOpen ? (
        <MdKeyboardControlKey className=" text-3xl mt-1" />
      ) : (
        <MdKeyboardArrowDown className=" text-3xl mt-1" />
      )}
    </div>
  )
}

export default TrainingHeader
