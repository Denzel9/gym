import { useMutation, useQuery, useQueryClient } from 'react-query'
import { TrainingService } from '../../services/trainingService'
import { DayTraining, TrainingDayInterface } from '../../types/user.interface'
import { initDayTraining, initExerciseType } from '../../data/initTraning'
import { UserService } from '../../services/userService'
import { useContext } from 'react'
import { UserProviderContext } from '../../providers/UserProvider'

export const useGetUser = (id: string) => {
  const { data, isLoading } = useQuery('user', () => UserService.findUserById(id))
  return { data, isLoading }
}

export const useAddTrainingDay = (date: string, training: DayTraining[]) => {
  const queryClient = useQueryClient()
  const { calendar, id } = useContext(UserProviderContext)
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
