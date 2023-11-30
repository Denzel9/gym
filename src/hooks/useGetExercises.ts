import { useAppSelector } from './useAppSelector'

export const useGetExercises = () => {
  const exercises = Object.entries(useAppSelector((state) => state.currentTraining.exercises))
  const temporaryTraining = Object.entries(
    useAppSelector((state) => state.currentTraining.temporaryTraining)
  )
  const steps = exercises.map((el) => el.filter((el) => typeof el !== 'string'))
  return { exercises, steps, temporaryTraining }
}
