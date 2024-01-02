import { useMutation, useQuery, useQueryClient } from 'react-query'
import { UserService } from '../../services/userService'
import { UserInfoInterface } from '../../types/user.interface'

export const useGetUsers = (id: string) => {
  const { data, isLoading } = useQuery('getUsers', () => UserService.getUsers(), {
    enabled: !!id,
  })
  return { data, isLoading }
}

export const useGetUser = (id: string) => {
  const { data, isLoading, isSuccess } = useQuery('getUser', () => UserService.findUserById(id), {
    enabled: !!id,
  })
  return { data, isLoading, isSuccess }
}

export const useAddUser = () => {
  const {
    mutateAsync: addUser,
    isLoading,
    isSuccess,
  } = useMutation('newUser', (id: string) => {
    return UserService.addUser(id)
  })
  return { addUser, isLoading, isSuccess }
}

export const useUpdateUserInfo = (id: string) => {
  const queryClient = useQueryClient()

  const {
    mutateAsync: updateUserInfo,
    isLoading,
    isSuccess,
  } = useMutation(
    'updateUserInfo',
    (userInfo: UserInfoInterface) => {
      return UserService.updateUserInfo(id, userInfo)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: 'getUsers' })
      },
    }
  )
  return { updateUserInfo, isLoading, isSuccess }
}

export const useUpdateUserName = (id: string) => {
  const queryClient = useQueryClient()

  const {
    mutateAsync: updateUserName,
    isLoading,
    isSuccess,
  } = useMutation(
    'updateUserName',
    (name: string) => {
      return UserService.updateUserName(id, name)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: 'getUsers' })
      },
    }
  )
  return { updateUserName, isLoading, isSuccess }
}
