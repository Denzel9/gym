import { useMutation, useQueryClient } from 'react-query'
import { TrainingService } from '../../services/trainingService'
import { TrainingDayInterface } from '../../types/user.interface'
import { upperBody } from '../../data/initTraning'

export const useUpdateCalendar = (calendar: TrainingDayInterface[], id: string, date: string) => {
  const queryClient = useQueryClient()

  const trainingDay = calendar?.find((el) => el.date === date)

  const {
    mutateAsync: mutateCalendar,
    isLoading,
    isSuccess,
  } = useMutation(
    'calendar',
    () => {
      if (!trainingDay?.training?.length) {
        trainingDay?.training.push(...upperBody)
      }
      return TrainingService.updateCalendar(calendar, id)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: 'calendar' })
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
        queryClient.invalidateQueries({ queryKey: 'calendar' })
      },
    }
  )
  return { deleteTraining, isLoading, isSuccess }
}
