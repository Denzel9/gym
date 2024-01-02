import { useMutation, useQuery, useQueryClient } from 'react-query'
import { CalendarService } from '../../services/calendarService'
import { initDayTraining, initExerciseType } from '../../data/initTraning'
import { useContext } from 'react'
import { UserProviderContext } from '../../providers/UserProvider'
import { DayTraining, TrainingDayInterface } from '../../types/calendar.interface'
import { CalendarProviderContext } from '../../providers/CalendarProvider'

export const useAddCalendar = () => {
  const { mutateAsync: addCalendar } = useMutation('calendar', (id: string) =>
    CalendarService.addCalendar(id)
  )
  return { addCalendar }
}

export const useGetCalendar = (id: string) => {
  const { data } = useQuery('calendar', () => CalendarService.getCalendar(id), {
    enabled: !!id,
  })
  return { data }
}

export const useAddTrainingDay = (date: string, training: DayTraining[]) => {
  const queryClient = useQueryClient()
  const { id } = useContext(UserProviderContext)
  const { calendar } = useContext(CalendarProviderContext)

  const trainingDay = calendar?.find((el) => el.date === date)

  const {
    mutateAsync: mutateCalendar,
    isLoading,
    isSuccess,
  } = useMutation(
    'updateCalendar',
    () => {
      if (trainingDay && !trainingDay?.training?.length) {
        trainingDay?.training.push(...training)
      }
      if (!trainingDay) {
        calendar.push(initDayTraining(date, training, initExerciseType[1].type))
      }
      return CalendarService.updateCalendar(calendar, id)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: 'user' })
      },
    }
  )
  return { mutateCalendar, isLoading, isSuccess, trainingDay }
}

export const useDeleteTrainingDay = (
  calendar: TrainingDayInterface[],
  id: string,
  date: string
) => {
  const queryClient = useQueryClient()

  const trainingDay = calendar?.find((el) => el.date === date)

  const {
    mutateAsync: deleteTraining,
    isLoading,
    isSuccess,
  } = useMutation(
    'calendar',
    () => {
      if (trainingDay?.training?.length) {
        trainingDay?.training.splice(0, trainingDay?.training?.length)
      }
      return CalendarService.updateCalendar(calendar, id)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: 'user' })
      },
    }
  )
  return { deleteTraining, isLoading, isSuccess }
}
