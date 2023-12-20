import { FunctionComponent, ReactNode, createContext, useEffect, useState } from 'react'
import { UserIterface } from '../types/user.interface'
import { useGetUser } from '../hooks/query-hooks/useUpdateCalendar'
import { useAuth } from '@clerk/clerk-react'

export const UserProviderContext = createContext({} as UserIterface)

const UserProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserIterface>({} as UserIterface)
  const { userId } = useAuth()

  const { data } = useGetUser(userId!)

  useEffect(() => setCurrentUser(data!), [data, userId])

  return <UserProviderContext.Provider value={currentUser}>{children}</UserProviderContext.Provider>
}

export default UserProvider
