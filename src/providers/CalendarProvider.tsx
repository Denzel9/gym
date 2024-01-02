import { FunctionComponent, ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { UserProviderContext } from './UserProvider'
import { useGetCalendar } from '../hooks/query-hooks/useCalendar'
import { CalendarInterface, TrainingDayInterface } from '../types/calendar.interface'
import { TODAY } from '../helpers/getDate'

interface CalendarProviderContextProps {
  name: string
  id: string
  userId: string
  calendar: TrainingDayInterface[]
  todayTraining: TrainingDayInterface | undefined
  getTraining(date: string): TrainingDayInterface | undefined
  lastTraining: TrainingDayInterface | undefined
  nextTraining: TrainingDayInterface | undefined
}

export const CalendarProviderContext = createContext({} as CalendarProviderContextProps)

const CalendarProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [calendarList, setCalendarList] = useState<CalendarInterface>({} as CalendarInterface)
  const { id } = useContext(UserProviderContext)
  const { data } = useGetCalendar(id!)

  useEffect(() => setCalendarList(data!), [data, id])

  const todayTraining = calendarList?.calendar?.find((el) => {
    const dayDate = el.date.split('.')
    const todayDate = TODAY.split('.')
    if (
      el.training.length &&
      dayDate[0] === todayDate[0] &&
      dayDate[1] === todayDate[1] &&
      dayDate[2] === todayDate[2]
    ) {
      return el
    }
    return null
  })

  const lastTraining = calendarList?.calendar?.find((el) => {
    const dayDate = el.date.split('.')
    const todayDate = TODAY.split('.')
    if (
      (el.training.length && dayDate[0] < todayDate[0] && dayDate[1] <= todayDate[1]) ||
      dayDate[2] < todayDate[2]
    ) {
      return el
    }
    return null
  })

  const nextTraining = calendarList?.calendar?.find((el) => {
    const dayDate = el.date.split('.')
    const todayDate = TODAY.split('.')
    if (
      el.training.length &&
      dayDate[0] > todayDate[0] &&
      dayDate[1] >= todayDate[1] &&
      dayDate[2] >= todayDate[2]
    ) {
      return el
    }
    return null
  })

  const getTraining = (date: string) =>
    calendarList?.calendar?.find((el) => {
      const dayDate = el.date.split('.')
      const todayDate = date.split('.')
      if (
        el.training.length &&
        dayDate[0] === todayDate[0] &&
        dayDate[1] === todayDate[1] &&
        dayDate[2] === todayDate[2]
      ) {
        return el
      }
      return null
    })

  return (
    <CalendarProviderContext.Provider
      value={{
        ...calendarList,
        todayTraining,
        lastTraining,
        nextTraining,
        getTraining,
      }}
    >
      {calendarList ? children : null}
    </CalendarProviderContext.Provider>
  )
}

export default CalendarProvider
