import { FunctionComponent, ReactNode, createContext, useEffect, useState } from 'react'
import { UserIterface } from '../types/user.interface'

import { useAuth } from '@clerk/clerk-react'

import { useAddUser, useGetUsers } from '../hooks/query-hooks/useUser'
import { useAddCalendar } from '../hooks/query-hooks/useCalendar'

export const UserProviderContext = createContext({} as UserIterface)

const UserProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserIterface>({} as UserIterface)
  const { userId } = useAuth()
  const { data: users, isLoading } = useGetUsers(userId!)
  const { addCalendar } = useAddCalendar()
  const { addUser } = useAddUser()

  useEffect(() => {
    const user = users?.find((el) => el.userId === userId)
    if (!isLoading && !user && userId) {
      addUser(userId)
        .then((res) => setCurrentUser(res))
        .then(() => addCalendar(userId))
    } else if (user) {
      setCurrentUser(user)
    }
  }, [addCalendar, addUser, isLoading, userId, users])

  return (
    <UserProviderContext.Provider value={currentUser}>
      {currentUser ? children : null}
    </UserProviderContext.Provider>
  )
}

export default UserProvider
