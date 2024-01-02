import { useMutation, useQuery } from 'react-query'
import { UserService } from '../../services/userService'

export const useGetUsers = (id: string) => {
  const { data, isLoading } = useQuery('user', () => UserService.getUsers(), {
    enabled: !!id,
  })
  return { data, isLoading }
}

export const useGetUser = (id: string) => {
  const { data, isLoading, isSuccess } = useQuery('user', () => UserService.findUserById(id), {
    enabled: !!id,
  })
  return { data, isLoading, isSuccess }
}

export const useAddUser = () => {
  const {
    mutateAsync: addUser,
    isLoading,
    isSuccess,
  } = useMutation('user', (id: string) => {
    return UserService.addUser(id)
  })
  return { addUser, isLoading, isSuccess }
}
