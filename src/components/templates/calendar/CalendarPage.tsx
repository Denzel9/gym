import { FunctionComponent, useState } from 'react'
import CalendarList from './calendar-list/CalendarList'

const CalendarPage: FunctionComponent = () => {
  const [trainingType, setTrainingType] = useState('false')
  return (
    <div>
      <h1 className=" text-3xl">Кадендарь</h1>
      <CalendarList trainingType={trainingType} setTrainingType={setTrainingType} />
    </div>
  )
}

export default CalendarPage
