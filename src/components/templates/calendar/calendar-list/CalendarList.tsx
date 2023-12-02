import { FunctionComponent, useContext } from 'react'
import CalendarListItem from './calendar-item/CalendarListItem'
import { UserProviderContext } from '../../../../providers/UserProvider'

const CalendarList: FunctionComponent<{
  trainingType: string
  setTrainingType(trainingType: string): void
}> = ({ trainingType, setTrainingType }) => {
  const { calendar, id } = useContext(UserProviderContext)

  console.log(calendar)
  return (
    <ul className=" mt-5">
      {calendar?.map((el) => {
        return (
          <CalendarListItem
            key={el.date}
            {...el}
            trainingType={trainingType}
            setTrainingType={setTrainingType}
            calendar={calendar}
            id={id}
          />
        )
      })}
    </ul>
  )
}

export default CalendarList
