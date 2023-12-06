import { useMutation, useQuery, useQueryClient } from 'react-query'
import { TrainingService } from '../../services/trainingService'
import { TrainingDayInterface } from '../../types/user.interface'
import { initDayTraining, typeTraining } from '../../data/initTraning'
import { UserService } from '../../services/userService'

export const useGetUser = (id: string) => {
  const { data, isLoading } = useQuery('user', () => UserService.findUserById(id))
  return { data, isLoading }
}

export const useAddTrainingDay = (calendar: TrainingDayInterface[], id: string, date: string) => {
  const queryClient = useQueryClient()

  const trainingDay = calendar?.find((el) => el.date === date)
  console.log(calendar)

  const {
    mutateAsync: mutateCalendar,
    isLoading,
    isSuccess,
  } = useMutation(
    'updateCalendar',
    () => {
      if (trainingDay && !trainingDay?.training?.length) {
        trainingDay?.training.push(...typeTraining.upperBody)
      }
      if (!trainingDay) {
        calendar.push(initDayTraining(date, typeTraining.upperBody))
      }
      return TrainingService.updateCalendar(calendar, id)
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
  console.log(date)
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
      return TrainingService.updateCalendar(calendar, id)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: 'user' })
      },
    }
  )
  return { deleteTraining, isLoading, isSuccess }
}
